package Vychislenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Vychislenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Страна
 */
@Entity(name = "IISVychislenieСтрана")
@Table(schema = "public", name = "Страна")
public class Strana {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НазваниеС")
    private String названиес;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Les")
    @Convert("Les")
    @Column(name = "Лес", length = 16, unique = true, nullable = false)
    private UUID _lesid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Les", insertable = false, updatable = false)
    private Les les;


    public Strana() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНазваниеС() {
      return названиес;
    }

    public void setНазваниеС(String названиес) {
      this.названиес = названиес;
    }


}