package org.example.project.subcategory.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.example.project.user.entity.User;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
public class SubCategory {
    @Id
    private UUID id;

    @Column(unique = true)
    private String phoneNumber;

    private String fax;

    private String email;

    private String issn;

    private String website;

    private String name;

    @ElementCollection
    @CollectionTable(name = "journal_images", joinColumns = @JoinColumn(name = "journal_id"))
    @Column(name = "image_name")
    private List<String> images;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonIgnore
    private User user;

    @CreatedDate
    private LocalDateTime created;

    @LastModifiedDate
    private LocalDateTime updated;
}
