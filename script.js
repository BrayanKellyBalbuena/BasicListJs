var userNs = userNs || {};

(function () {
    this.empleados = [];
    this.fechaActual;
    this.edad,
    this.signo;
    this.fechaNacimiento;

    this.Empleado = function (nombre, apellido, salario,
        cedula, fecha, colorFav, edad, signo) {
        this.nombre = nombre;
        this.apellido = apellido;
        if (isNaN(salario)) {
            salario = 0;
        }
        this.salario = parseFloat(salario);
        this.cedula = cedula;
        this.fecha = fecha;
        this.colorFav = colorFav;
        this.edad = edad;
        this.signoSodiacal = signo;
    };

    this.setFechaNacimineto = function (fechaN) {
        this.fechaNacimiento = new Date(parseInt(fechaN[2]),
            parseInt(fechaN[1] - 1), parseInt(fechaN[0]));
            this.fechaNac = fechaN;
    };

    this.getFechaNacimiento = function getFechaNacimiento() {
        return this.fechaNacimiento;
    };

    this.setEdad = function () {
        if (this.getFechaNacimiento().getDate() > 31 && this.getFechaNacimiento().getDate() < 1) {
            alert("El dia de ser > 0 y < 31");
        }
        if (this.getFechaNacimiento().getMonth() > 11 && this.getFechaNacimiento().getMonth() < 0) {
            alert("El mes de ser > 0 y < 12");
        }
        if (this.getFechaNacimiento().getFullYear() > fechaActual.getFullYear()) {
            alert("Usted no pudo nacer mas alla del" + fechaActual.getFullYear());
        }

        if (fechaActual.getMonth() < this.getFechaNacimiento().getMonth()) {
            this.fechaNacimiento = new Date(parseInt(fechaNac[2]),
                parseInt(fechaNac[1] - 1), parseInt(fechaNac[0]));
                this.edad = fechaActual.getFullYear() - this.getFechaNacimiento().getFullYear() - 1;
        } else if (fechaActual.getMonth() == this.getFechaNacimiento().getMonth() &&
        this.fechaActual.getDate() > this.getFechaNacimiento().getDate()) {
            fechaNacimiento = new Date(parseInt(fechaNac[2]),
                parseInt(fechaNac[1] - 1), parseInt(fechaNac[0]));
                this.edad = fechaActual.getFullYear() - this.getFechaNacimiento().getFullYear();
        } else if (fechaActual.getMonth() == this.getFechaNacimiento().getMonth() &&
        this.fechaActual.getDate() < this.getFechaNacimiento().getDate()) {
            this.fechaNacimiento = new Date(parseInt(fechaNac[2]),
                parseInt(fechaNac[1] - 1), parseInt(fechaNac[0]));
                this. edad = fechaActual.getFullYear() - this.getFechaNacimiento().getFullYear() - 1;
        } else if (fechaActual.getMonth() == this.getFechaNacimiento().getMonth() &&
        this.fechaActual.getDate() >= this.getFechaNacimiento().getDate()) {
                this.fechaNacimiento = new Date(parseInt(fechaNac[2]),
                parseInt(fechaNac[1] - 1), parseInt(fechaNac[0]));
                this.edad = fechaActual.getFullYear() - this.getFechaNacimiento().getFullYear();
        }
        this.edad = this.letras(this.edad);
    };

    this.getEdad = function () {
        return this.edad;
    }

    this.letras = function (edad) {
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        b = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', '', 'ocho', 'nueve',
            'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis',
            'diecisiete', 'dieciocho', 'diecinueve', 'veinte',
        ]
        for (x = 0; x < a.length; x++) {
            if (a[x] == edad) {
                edad = b[x] + 1;
                return edad;
            } else
                return edad;
        }
    }

    this.getSigno = function () {
        if ((this.getFechaNacimiento().getDate() >= 21 && this.getFechaNacimiento().getMonth() == 3) ||
            (this.getFechaNacimiento().getDate() <= 20 && this.getFechaNacimiento().getMonth() == 4))
            return 'Aries';
        else if ((this.getFechaNacimiento().getDate() >= 21 && this.getFechaNacimiento().getMonth() == 4) ||
            (this.getFechaNacimiento().getDate() <= 21 && this.getFechaNacimiento().getMonth() == 5))
            return 'Tauro';
        else if ((this.getFechaNacimiento().getDate() >= 22 && this.getFechaNacimiento().getMonth() == 5) ||
            (this.getFechaNacimiento().getDate() <= 21 && this.getFechaNacimiento().getMonth() == 6))
            return 'geminis';
        else if ((this.getFechaNacimiento().getDate() >= 22 && this.getFechaNacimiento().getMonth() == 6) ||
            (this.getFechaNacimiento().getDate() <= 22 && this.getFechaNacimiento().getMonth() == 7))
            return 'cancer';
        else if ((this.getFechaNacimiento().getDate() >= 23 && this.getFechaNacimiento().getMonth() == 7) ||
            (this.getFechaNacimiento().getDate() <= 22 && this.getFechaNacimiento().getMonth() == 8))
            return 'leo';
        else if ((this.getFechaNacimiento().getDate() >= 23 && this.getFechaNacimiento().getMonth() == 8) ||
            (this.getFechaNacimiento().getDate() <= 22 && this.getFechaNacimiento().getMonth() == 9))
            return 'virgo';
        else if ((this.getFechaNacimiento().getDate() >= 23 && this.getFechaNacimiento().getMonth() == 9) ||
            (this.getFechaNacimiento().getDate() <= 22 && this.getFechaNacimiento().getMonth() == 10))
            return 'libra';
        else if ((this.getFechaNacimiento().getDate() >= 23 && this.getFechaNacimiento().getMonth() == 10) ||
            (this.getFechaNacimiento().getDate() <= 22 && this.getFechaNacimiento().getMonth() == 11))
            return 'escorpion;'
        else if ((this.getFechaNacimiento().getDate() >= 23 && this.getFechaNacimiento().getMonth() == 11) ||
            (this.getFechaNacimiento().getDate() <= 21 && this.getFechaNacimiento().getDate() == 12))
            return 'sagitario';
        else if ((this.getFechaNacimiento().getDate() >= 22 && this.getFechaNacimiento().getMonth() == 12) ||
            (this.getFechaNacimiento().getDate() <= 20 && this.getFechaNacimiento().getMonth() == 1))
            return 'sagitario';
        else if ((this.getFechaNacimiento().getDate() >= 21 && this.getFechaNacimiento().getDate() == 1) ||
            (this.getFechaNacimiento().getDate() <= 19 && this.getFechaNacimiento().getDate() == 2))
            return 'capricornio';
        else
            return signo = 'picis';
    }

   this.guardarDatos = function() {
        datos = JSON.stringify(this.empleados);
        localStorage.setItem('Tarea2', datos)
    }

    this.agregarEmpleado = function() {
        nombre = document.getElementById('txtNombre').value;
        apellido = document.getElementById('txtApellido').value;
        salario = document.getElementById('txtSalario').value;
        cedula = document.getElementById('txtCedula').value;
        fechaActual = new Date();
        fechan = this.dGEBI('txtFechaNac').value;
        a = fechan.split('/');
        if (a.length < 3 || a.length > 3) {
            alert("Formato de fecha no valido el correcto es\n dd/mm/yy");
            if (!confirm('Desea volver a intertar'))
                alert('Adios');
        }
        color = document.getElementById('txtColorFav').value;
        this.setFechaNacimineto(a);
        this.setEdad();
        emple = new this.Empleado(nombre, apellido,
            salario, cedula, fechan,
            color, this.getEdad(), this.getSigno());

        this.empleados.push(emple);
        this.mostrarEmpleado();
        this.limpiarCampos();
        this.guardarDatos()

    }

    this.dCE =  function (elemento) {
        return document.createElement(elemento);
    }

    this.dGEBI = function (id) {
        return document.getElementById(id);
    }

    this.limpiarCampos = function () {
        this.dGEBI('txtNombre').value = '';
        this.dGEBI('txtApellido').value = '';
        this.dGEBI('txtSalario').value = '';
        this.dGEBI('txtCedula').value = '';
        this.dGEBI('txtFechaNac').value = '';
        this.dGEBI('txtColorFav').value = '';
    }

    this.borrarFila = function (btn) {
        tr = btn.parentNode.parentNode;
        tr.setAttribute('class', 'borrar')
        if (confirm('Seguro que desea eliminar la fila seleccionada')) {
            indice = tr.getAttribute('indice');
            arr = [];
            for (x = 0; x < this.empleados.length; x++) {
                if (x != indice) {
                    arr.push(this.empleados[x]);
                }
            }
            this.empleados = arr;
            tr.parentNode.removeChild(tr);
            this.guardarDatos();
        }

        tr.setAttribute('class', 'vacia')
    }

    this.mostrarEmpleado = function () {
        destino = document.getElementById('tbDatos');
        destino.innerHTML = '';
        for (x = 0; x < this.empleados.length; x++) {
            empleado = this.empleados[x];
            tr = this.dCE('tr');
            td = this.dCE('td');
            td.innerHTML = empleado.nombre;
            tr.appendChild(td);
            tr.setAttribute('indice', x)

            td = this.dCE('td');
            td.innerHTML = empleado.apellido;
            tr.appendChild(td)

            td = this.dCE('td');
            td.innerHTML = empleado.salario;
            tr.appendChild(td)

            td = this.dCE('td');
            td.innerHTML = empleado.cedula;
            tr.appendChild(td)

            td = this.dCE('td');
            td.innerHTML = empleado.fecha;
            tr.appendChild(td)

            td = this.dCE('td');
            td.innerHTML = empleado.colorFav;
            tr.appendChild(td);

            td = this.dCE('td');
            td.innerHTML = empleado.edad;
            tr.appendChild(td);

            td = this.dCE('td');
            td.innerHTML = empleado.signoSodiacal;
            tr.appendChild(td);

            td = this.dCE('td');
            btn = this.dCE('button');
            btn.innerHTML = 'X';
            btn.setAttribute('onclick', 'userNs.borrarFila(this)')
            td.appendChild(btn);
            tr.appendChild(td);

            destino.appendChild(tr);
        }
    };

    this.cargarDatos = function () {
        datos = localStorage.getItem('Tarea2');
        if (datos != null) {
            this.empleados = JSON.parse(datos);
            this.mostrarEmpleado();
        }
    };
}).call(userNs);