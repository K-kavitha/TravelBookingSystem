package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entity.Bus;
import com.example.demo.entity.Train;

public interface TrainService {
	public void addTrain(Train train);
	public List<Train>findALL();
	public Optional<Train> findTrainById(int id);
	public void updateBus(Train train);
	public void deleteById(int trainId);
}
