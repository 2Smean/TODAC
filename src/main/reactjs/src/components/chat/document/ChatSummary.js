import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import diagnosis from '../../../image/diagnosis.png';
import './DocumentStyle.css';
import axios from 'axios';
import summarizeContent from '../api/summarize';

const ChatSummary = () => {
    const [summaryList, setSummaryList] = useState([]);
    const nav = useNavigate();
    const [query, setQuery] = useSearchParams();
    const roomcode = query.get("roomcode");
    const [loading, setLoading] = useState(true); // 요약본 생성 중인지 여부
    const [summarizedMessages, setSummarizedMessages] = useState({ summarizedUserMessage: "", summarizedCounselorMessage: "" });

    const handleInfoClick = () => {
        // sweetalert2 팝업 띄우기
        Swal.fire({
            title: '진단서 예시 및 간단 설명',
            html: '<div style="border: 1px solid red; border-radius: 10px; overflow: hidden;"><img src="' + diagnosis + '" alt="이미지" style="width: 80%; height: auto;"></div>',
            icon: 'info',
            confirmButtonText: '닫기',
        });
    };

    const list = async () => {
        try {
            const response = await axios.get("/chat/summary?chatroomcode=" + roomcode);
            setSummaryList(response.data);
        } catch (error) {
            console.error('Error fetching summary list:', error);
        } finally {
            setLoading(false); // 요약본 생성 완료 후 loading 상태 변경
        }
    };

    useEffect(() => {
        list();
    }, [roomcode]);

    // 사용자 고민 내용과 상담사의 답변 내용을 요약
    const summarizeMessages = async () => {
        Swal.fire({
            title: '요약본 생성중',
            text: '잠시만 기다려주세요!',
            icon: 'info',
            timerProgressBar: true,
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        const userLog = summaryList.filter((log) => (log.speaker === 0));
        const counselorLog = summaryList.filter((log) => (log.speaker !== 0));

        const summarizedUserMessage = await summarizeContent(
            userLog.map(item => item.content).join(' '),
            "user의 고민을 요약합니다."
        );
        const summarizedCounselorMessage = await summarizeContent(
            counselorLog.map(item => item.content).join(' '),
            "counselor의 답변을 요약합니다."
        );

        Swal.close(); // 요약이 완료되면 알림창 닫기

        return { summarizedUserMessage, summarizedCounselorMessage };
    };


    useEffect(() => {
        const saveSummarizedMessages = async (summarizedUserMessage, summarizedCounselorMessage) => {
            try {
                const response = await axios.get("/chat/summary/check?chatroomcode=" + roomcode);
                if (response.data.exists) {
                    // 이미 해당 roomcode에 대한 요약이 있으면 해당 데이터를 가져옴
                    list();
                } else {
                    // 해당 roomcode에 대한 요약이 없으면 새로운 요약을 생성하고 저장
                    await axios({
                        method: 'post',
                        url: "/chat/summary/save?chatroomcode=" + roomcode,
                        data: {
                            worry: summarizedUserMessage.content,
                            answer: summarizedCounselorMessage.content
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    list(); // 저장 후 요약본 데이터를 다시 불러옴
                }
            } catch (error) {
                console.error('Error saving or fetching summarized messages:', error);
            }
        };

        const getSummarizedMessages = async () => {
            const { summarizedUserMessage, summarizedCounselorMessage } = await summarizeMessages();
            setSummarizedMessages({ summarizedUserMessage, summarizedCounselorMessage });
            saveSummarizedMessages(summarizedUserMessage, summarizedCounselorMessage);
        };

        if (summaryList.length > 0) {
            getSummarizedMessages();
            console.log(roomcode)
        }
    }, [summaryList]);

    return (
        <div className='mx_30'>
            <div className='mt-1 fs_14'>
                <Link to="/user/chat" className='col_blue2'>TODAC 채팅 {'>'} </Link>
                <Link to="/user/chat/counsel" className='col_blue2'>상담 받기 {'>'} </Link>
                <Link to="/user/chat/summary" className='col_blue2'>요약</Link>
            </div>
            <div className='fs_25 fw_700'>오늘의 상담 요약</div>
            <br /><br />
            <div className='fs_20 fw_700'>내 고민 요약</div>
            <div className='summaryContent fs_14 bor_red bg_red mt_10'>
                {summarizedMessages.summarizedUserMessage.content}
            </div>
            <br />
            <div className='fs_20 fw_700'>상담사의 답변 요약</div>
            <div className='summaryAnswerContent fs_14 bor_blue1 bg_blue mt_10'>
                {summarizedMessages.summarizedCounselorMessage.content}
            </div>
            <br /><br />
            <div style={{ textAlign: 'center' }}>
                <button className='btn bor_blue1 bg_blue' style={{ color: '#536179' }} onClick={() => nav('../../')}>마이 홈 이동하기</button>
                &nbsp;&nbsp;
                <button className='btn bor_blue1 bg_blue' style={{ color: '#536179' }} onClick={() => nav('../diagnosis')}>진단서 발급(500P)</button>
                &nbsp;&nbsp;
                <span role="img" aria-label="info-icon" className="info-icon" style={{ cursor: 'pointer' }} onClick={handleInfoClick}>ℹ️</span>
            </div>
        </div>
    );
};

export default ChatSummary;
