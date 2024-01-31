package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"chat.*","board.*","donation.*","facemotion.*","login.*","admin.*","mypage.*"
,"naver.storage","security.setting"})
@EntityScan("*.data")
@EnableJpaRepositories({"chat.repository","board.repository","donation.repository","facemotion.repository","login.repository","admin.repository","mypage.repository"})
public class TodacApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodacApplication.class, args);
	}

}
