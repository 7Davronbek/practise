package org.example.project.journal.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.project.key_word.entity.KeyWords;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Journal {
    @Id
    private UUID id;

    @Column(unique = true)
    private String name;

    private String description;

    @ElementCollection
    @CollectionTable(name = "journal_images", joinColumns = @JoinColumn(name = "journal_id"))
    @Column(name = "image_name")
    private List<String> imageNames;

    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "journal_keyword",
            joinColumns = @JoinColumn(name = "journal_id"),
            inverseJoinColumns = @JoinColumn(name = "keyword_id")
    )
    private Set<KeyWords> keywords;

    private String file;

    @CreatedDate
    private LocalDateTime created;

    @LastModifiedDate
    private LocalDateTime updated;
}
