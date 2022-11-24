package com.fecaf.adopet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fecaf.adopet.model.Pet;


@Repository
public interface PetRepository extends JpaRepository<Pet, String> {
 
  public List<Pet> findFirst8ByOrderByCreatedAtDesc();
}
