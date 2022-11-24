package com.fecaf.adopet.model;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity(name = "pets")
public class Pet {

	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid")
	@Column(columnDefinition = "CHAR(32)")
	@Id
	private String id;

  @Column(nullable = false, name="pet_name")
  private String name;
    
  @Column(nullable = false, name="pet_weight")
  private String weight;
    
  @Column(nullable = false, name="pet_birth_date")
  private String birthDate;

	@Column(nullable = false, name="pet_sex")
  private String sex;
    
  @Column(nullable = false, name="pet_breed")
  private String breed;
    
  @Column(nullable = false, name="pet_tags")
  private String tags;
    
  @Column(nullable = false, name="pet_description", columnDefinition = "TEXT")
  private String description;
    
  @Column(nullable = false,  name="pet_category")
  private String category;

	@Column(nullable = false, name="pet_img_url")
  private String imgUrl;

	@Column(nullable = false, name="pet_adopted")
  private Boolean adopted;

	@Column(name="pet_adopted_by")
  private String adoptedBy;
    
  @ManyToOne
  @JoinColumn(nullable = false, name="author_id")
  private User author;
    
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

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getBreed() {
		return breed;
	}

	public void setBreed(String breed) {
		this.breed = breed;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public User getAuthor() {
		return author;
	}

	public void setAuthor(User author) {
		this.author = author;
	}
	
	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Boolean getAdopted() {
		return adopted;
	}

	public void setAdopted(Boolean adopted) {
		this.adopted = adopted;
	}

	public String getAdoptedBy() {
		return adoptedBy;
	}

	public void setAdoptedBy(String adoptedBy) {
		this.adoptedBy = adoptedBy;
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
