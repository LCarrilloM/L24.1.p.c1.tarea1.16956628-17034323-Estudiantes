/**
 * ESTUDIANTES
 * En la UCLA, el DCYT desea conocer algunas estadísticas de sus estudiantes. 
 * De cada estudiante se conoce: su cédula, sexo y sus tres notas parciales. 
 * Se requiere conocer por el DCYT: 
 * a) nota total obtenida por el estudiante 
 * b) la mayor nota obtenida 
 * c) De los estudiantes femeninos cantidad de estudiantes aprobadas, 
 * d) promedio de notas.
 * El DCYT suministra la siguiente información demostrativa, para 4 estudiantes: 
 * (cedula, sexo,notap1, notap2, notap3) (13457856, M, 15, 20, 25) 
 * (15432551, F, 10, 10, 10) (32455678, M,18, 22, 20) (28678900, F, 18, 25, 24), 
 * 
 * según lo cual la salida requerida presenta el siguiente formato:
 * El estudiante con cedula 13457856 obtuvo una nota total de 60
 * El estudiante con cedula 15432551 obtuvo una nota total de 30
 * El estudiante con cedula 32455678 obtuvo una nota total de 60
 * El estudiante con cedula 28678900 obtuvo una nota total de 67
 * 
 * La mayor nota es 67
 * Estudiantes femeninas aprobadas 1
 * Promedio de notas 54.25
 */

import Cl_dcyt from "./Cl_dcyt.js";
import Cl_estudiante from "./Cl_estudiante.js";

let estud1=new Cl_estudiante (13457856, "M", 15, 20, 25);
let estud2=new Cl_estudiante (15432551, "F", 10, 10, 10);
let estud3=new Cl_estudiante (32455678, "M",18, 22, 20);
let estud4=new Cl_estudiante (28678900, "F", 18, 25, 24);

let dcyt=new Cl_dcyt();

dcyt.procesarEstudiante(estud1);
dcyt.procesarEstudiante(estud2);
dcyt.procesarEstudiante(estud3);
dcyt.procesarEstudiante(estud4);

let salida=document.getElementById("salida");

salida.innerHTML+="<br>El estudiante con cedula " +estud1.cedula; 
salida.innerHTML+=" obtuvo una nota total de " +estud1.notaTotal();
salida.innerHTML+="<br>El estudiante con cedula " +estud2.cedula; 
salida.innerHTML+=" obtuvo una nota total de " +estud2.notaTotal();
salida.innerHTML+="<br>El estudiante con cedula " +estud3.cedula; 
salida.innerHTML+=" obtuvo una nota total de " +estud3.notaTotal();
salida.innerHTML+="<br>El estudiante con cedula " +estud4.cedula; 
salida.innerHTML+=" obtuvo una nota total de " +estud4.notaTotal();
salida.innerHTML+="<br><br>La mayor nota es " +dcyt.devMayorN();
salida.innerHTML+="<br>Estudiantes femeninas aprobadas " +dcyt.devCantFA();
salida.innerHTML+="<br>Promedio de notas " +dcyt.promNota();


