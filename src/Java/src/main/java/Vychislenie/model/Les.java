package Vychislenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Vychislenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Лес
 */
@Entity(name = "IISVychislenieЛес")
@Table(schema = "public", name = "Лес")
public class Les {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НазваниеЛ")
    private String названиел;

    @OneToMany(mappedBy = "les", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Strana> stranas;


    public Les() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНазваниеЛ() {
      return названиел;
    }

    public void setНазваниеЛ(String названиел) {
      this.названиел = названиел;
    }


}