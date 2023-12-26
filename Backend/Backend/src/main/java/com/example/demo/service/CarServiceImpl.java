package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CarDao;
import com.example.demo.entity.Car;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarDao carDao;

    @Override
    public void addCar(Car car) {
        carDao.save(car);
    }

    @Override
    public List<Car> findAll() {
        return carDao.findAll();
    }

    @Override
    public Optional<Car> findCarById(int id) {
        return carDao.findById(id);
    }

    @Override
    public void saveOrUpdate(Car car) {
        carDao.save(car);
    }

    @Override
    public void deleteById(int carId) {
        carDao.deleteById(carId);
    }
}
