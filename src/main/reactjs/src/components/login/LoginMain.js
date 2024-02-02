import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginMain = () => {
    const nav = useNavigate();

    return (
        <div style={{padding : "100px"}}>
            TODAC
            <br/><br/><br/><br/>
            <button className='btn btn-success'
             style={{width : "100%"}}>네이버 로그인</button>
            <br/><br/>
            <button className='btn btn-warning'
             style={{width : "100%"}}>카카오 로그인</button>
            <br/><br/><br/><hr/><br/><br/>
            <button className='btn btn-secondary'
                onClick={() => nav('admin')}
                style={{width : "100%"}}>관리자 로그인</button>
        </div>
    );
};

export default LoginMain;