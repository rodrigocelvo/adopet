package com.fecaf.adopet.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity(name = "users")
public class User {

	@GeneratedValue(generator = "unique-id", strategy = GenerationType.IDENTITY)
	@GenericGenerator(name = "unique-id", strategy = "com.fecaf.adopet.utils.GenerateUniqueId")
	@Id
	private String id;

  @Column(nullable = false, name="user_name")
  private String name;
    
  @Column(nullable = false, name="user_email")
  private String email;
    
	@Column(nullable = false, name="user_phone")
  private String phone;
    
  @Column(nullable = false, name="user_city")
  private String city;
    
  @Column(nullable = false, name="user_city_uf")
  private String uf;
 
	@Column(name="user_avatar_url")
  private String avatar;

  @OneToMany(mappedBy = "author")
  private List<Pet> Pets = new ArrayList<>();

  @Column(name = "created_at")
  @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
  protected LocalDateTime createdAt;

  @Column(name = "updated_at")
  @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
  protected LocalDateTime updatedAt;

  public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}
	
  public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	@PrePersist
  protected void setCreate() {
    this.createdAt = LocalDateTime.now();
  }

  @PreUpdate
  protected void setUpdate() {
    this.updatedAt = LocalDateTime.now();
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public LocalDateTime getUpdatedAt() {
    return this.updatedAt == null ? getCreatedAt() : this.updatedAt;
  }
	
}
