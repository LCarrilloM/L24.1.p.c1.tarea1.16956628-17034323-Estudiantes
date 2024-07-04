export default class Cl_dcyt{
    constructor(){
        this.mayorN=0;
        this.cantFA=0;
        this.acumNotaT=0;
        this.cantEst=0;
    }

    procesarEstudiante(e){
        if(e.notaTotal()>this.mayorN){
            this.mayorN=e.notaTotal();
        }

        if(e.sexo=="F" && e.notaTotal()>=48){
            this.cantFA++;
        }

        this.acumNotaT+=e.notaTotal();
        this.cantEst++;

    }

    devCantFA(){
        return this.cantFA;
    }

    devMayorN(){
        return this.mayorN;
    }

    promNota(){
        return this.acumNotaT/this.cantEst;
    }

}