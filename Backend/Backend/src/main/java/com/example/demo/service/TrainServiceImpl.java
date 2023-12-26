package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.dao.TrainDao;
import com.example.demo.entity.Train;
@Service
public class TrainServiceImpl implements TrainService {
	 @Autowired
     TrainDao dao;
	@Override
	public void addTrain(Train train) {
		// TODO Auto-generated method stub
		dao.save(train);
	}

	@Override
	public List<Train> findALL() {
		// TODO Auto-generated method stub
		return this.dao.findAll();
	}

	@Override
	public void updateBus(Train train) {
		// TODO Auto-generated method stub
		this.dao.save(train);
	}

	@Override
	public void deleteById(int trainId) {
		// TODO Auto-generated method stub
		dao.deleteById(trainId);
	}

	@Override
	public Optional<Train> findTrainById(int Id) {
		// TODO Auto-generated method stub
		return this.dao.findById(Id);
	}

	
}
