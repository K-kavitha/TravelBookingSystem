package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Car;
import com.example.demo.service.CarService;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/car")
public class CarController {

    @Autowired
    CarService carService;

    @PostMapping("/addcar")
    public ResponseEntity<Map<String, String>> saveCar(@RequestBody Car car) {
        try {
            this.carService.saveOrUpdate(car);
            Map<String, String> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Car registered!!");
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "failed");
            response.put("message", "Car not registered!!");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/view")
    public ResponseEntity<List<Car>> findAll() {
        return new ResponseEntity<>(this.carService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/carid/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable int id) {
        Optional<Car> car = carService.findCarById(id);

        if (car.isPresent()) {
            return new ResponseEntity<>(car.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<Map<String, String>> updateCar(@RequestBody Car car) {
        try {
            if (this.carService.findCarById(car.getcarId()).isPresent()) {
                Car existing = this.carService.findCarById(car.getcarId()).get();
                existing.setCarModel(car.getCarModel());
                existing.setCarColor(car.getCarColor());
                existing.setArrivalTime(car.getArrivalTime());
                existing.setDepartureTime(car.getDepartureTime());
                existing.setRoute(car.getRoute());
                existing.setTicketAmount(car.getTicketAmount());

                this.carService.saveOrUpdate(car);
                Map<String, String> response = new HashMap<>();
                response.put("status", "success");
                response.put("message", "Car data updated!!");
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                Map<String, String> response = new HashMap<>();
                response.put("status", "failed");
                response.put("message", "Car data not found!!");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e1) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "failed");
            response.put("message", "Car not updated!!");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, String>> deleteCar(@PathVariable(name = "id") int carId) {
        try {
            this.carService.deleteById(carId);
            Map<String, String> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Car data deleted!!");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "failed");
            response.put("message", "Car data not deleted!!");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }
}
