package mypage.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import lombok.AllArgsConstructor;
import mypage.data.MemberDto;

@Repository
@AllArgsConstructor
public class MemberDao {
	MemberRepository daoInter;
	
		//db저장
		public void insertMember(MemberDto dto)
		{
			//System.out.println(" ====================== " + dto);
			daoInter.save(dto);
		}
		
		//list
		public List<MemberDto> getAllMember ()
		{
			return daoInter.findAll();
		}

		public MemberDto getMemberByID(String userid)
		{
			return daoInter.getMemberByID(userid);
		}
		
		public void deleteMember(String userid)
		{
			daoInter.deleteMember(userid);
		}


}