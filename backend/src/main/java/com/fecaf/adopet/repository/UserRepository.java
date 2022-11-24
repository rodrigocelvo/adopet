package com.fecaf.adopet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fecaf.adopet.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {}