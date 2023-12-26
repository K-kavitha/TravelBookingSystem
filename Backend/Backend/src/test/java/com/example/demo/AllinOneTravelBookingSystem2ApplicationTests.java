package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.dao.BusDao;
import com.example.demo.entity.Bus;
import com.example.demo.service.BusServiceImpl;


@SpringBootTest
class AllinOneTravelBookingSystem2ApplicationTests {

	@InjectMocks
	BusServiceImpl manager;

	@Mock
	BusDao dao;
	
	@Before(value = "")
	public void init() {
		MockitoAnnotations.openMocks(this);
	}
	
	@Test
	public void getAllBusTest() throws ParseException{
		
		Scanner sc=new Scanner(System.in);
		
		 Date date = new Date();
			List<Bus> list = new ArrayList<Bus>();
		LocalDateTime LocalDateTime = null;
		Bus busOne = new Bus(17, "22","Aarthi",30,LocalDateTime,LocalDateTime,"Coimbatore","Udumalpet",100);
	
			list.add(busOne);
			
			when(dao.findAll()).thenReturn(list);
			
			List<Bus> busList = dao.findAll();

			assertEquals(1, busList.size());
			verify(dao, times(1)).findAll();
	}
	
	@Test
	public void getBusByIdTest() throws ParseException {
		int id1 = 1;
		manager.findBusById(id1);
		verify(dao, times(1)).findById(id1);
	}

	@Test
	public void createBusTest() throws ParseException
	{
		{
			Scanner sc=new Scanner(System.in);
						
						
			   Date date = new Date();
		 LocalDateTime LocalDateTime = null;
	Bus busOne = new Bus(17, "22","Aarthi",30,LocalDateTime,LocalDateTime,"Coimbatore","Udumalpet",100);
		
		manager.addBus(busOne);
		verify(dao, times(1)).save(busOne);

	}
		

}
}
