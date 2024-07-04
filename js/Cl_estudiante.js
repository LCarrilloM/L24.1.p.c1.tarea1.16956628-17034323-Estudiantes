export default class Cl_estudiante {
    constructor (cedula,sexo,notap1,notap2,notap3) {
        this.cedula=cedula;
        this.sexo=sexo;
        this.notap1=notap1;
        this.notap2=notap2;
        this.notap3=notap3;
    }

    setCedula (c){
        this._cedula=+c;
    }

    setSexo (s){
        this._sexo=s;
    }

    setNotap1 (n1){
        this._notap1=+n1;
    }

    setNotap2 (n2){
        this._notap2=+n2;
    }

    setNotap3 (n3){
        this._notap3=+n3;
    }

    getCedula (){
        return this._cedula;
    }

    getSexo (){
        return this._sexo;
    }

    getNotap1 (){
        return this._notap1;
    }

    getNotap2 (){
        return this._notap2;
    }

    getNotap3 (){
        return this._notap3;
    }

    notaTotal(){
        return this.notap1+this.notap2+this.notap3;
    }

}