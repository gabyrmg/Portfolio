package com.portfolio.GRMG.Interface;

import com.portfolio.GRMG.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una persona
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto persona por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por Id
    public Persona findPersona(Long id);
    
}
