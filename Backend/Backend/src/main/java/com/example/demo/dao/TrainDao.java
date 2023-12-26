package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.Train;

public interface TrainDao extends JpaRepository<Train, Integer>{

}
