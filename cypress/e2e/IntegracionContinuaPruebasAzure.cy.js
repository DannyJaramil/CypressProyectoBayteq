

describe('Loggin', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it("Administrador Ecommece", () => {
        cy.visit('http://ns.bayteq.com:6162/auth');
        cy.get('input[formcontrolname="mail"]').click({ force: true });

        cy.get('input[formcontrolname="mail"]').type('admin@saludsa.com');
        cy.get('input[formcontrolname="password"]').click({ force: true });
        cy.get('input[formcontrolname="password"]').type('Inicio01.');
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click({ force: true });
        cy.get('button[type="submit"]').click({ force: true });




    });
})

describe('Registrar Parametro', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it("Administrador Ecommece", () => {
        cy.visit('http://ns.bayteq.com:6162/auth');
        cy.get('input[formcontrolname="mail"]').click({ force: true });

        cy.get('input[formcontrolname="mail"]').type('admin@saludsa.com');
        cy.get('input[formcontrolname="password"]').click({ force: true });
        cy.get('input[formcontrolname="password"]').type('Inicio01.');
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click({ force: true });

        cy.contains('span', ' Configuración ').click();
        cy.contains('button', 'Parámetros').click();
        cy.contains('span', 'Añadir Parámetro').click();

        cy.get("input[formcontrolname='code']").click().type('Inicio01.');
        cy.get("input[formcontrolname='name']").click().type('Inicio01.');
        cy.get("textarea[formcontrolname='description']").click().type('Demo Parametros del punto A al B.');
        cy.get('mat-select[ng-reflect-name="typevalue"]').click();
        cy.get('mat-option').contains('Boolean').click();


        cy.get('mat-select[ng-reflect-name="type"]').click();
        cy.get('mat-option').contains('Parámetro rol').click();

        cy.get("textarea[formcontrolname='value']").click().type('Demo Parametros del punto A al B.');

        cy.get('mat-select[ng-reflect-name="status"]').click();
        cy.get('mat-option').contains('Activo').click();
        cy.get('button[type="submit"]').click({ force: true });

    });
})




//cy.get("input[id='mat-input-0']").click().type('admin@saludsa.com');
//cy.get("input[name='Password']").click().type('Inicio01.');
//cy.get("input[type='submit']").click();
//demo




//cy.contains('Grupos').click();
//cy.contains('Nuevo').click();
//cy.get('input[name="IdGrupo"]').type('E21');
//cy.get('input[name="Nombre"]').type('Ejemplo555');
//cy.get('input[name="Descripcion"]').type('Eje5');
//cy.get('#saveBtn').click();
//cy.get('#confirmationModal')
//  .within(() => {
//  cy.contains('Aceptar').click();
//});

/*describe('Automatizacion Crear Parametro', () => {
  it('Visits the Kitchen Sink', () => {

/!*
    cy.visit('https://administradoripbc.azurewebsites.net/Account/Login')
    cy.get('input[id="Model_UserName"]').type('admin'); //detectar un elemento
    cy.get('input[id="Model_Password"]').type('Pruebas123'); // detecatr un elemento
    cy.contains('Entrar').click() //click en un button



    cy.get('a[href="/Configuration/Parameter"]').click() //click en un button
    cy.get('a[href="/Configuration/Parameter/Create"]').click() //click en un button

    cy.get('input[id="Parameter_Code"]').type('CodCypress');
    cy.get('input[id="Parameter_Name"]').type('Cypreess Name');
    cy.get('input[id="Parameter_Description"]').type('Cypreess Desc');
    cy.get('input[id="Parameter_Value"]').type('Desc Value');

    cy.get('input[id="Parameter_Version"]').type('1');
    cy.get('input[id="Parameter_Status"]').click();

    cy.get('select[id="Parameter_ParameterType"]').get('option[value="PARAM_TYPE_ADMIN"]').then(option => option.prop('selected', true));
    cy.contains('Guardar').click() //click en un button
*!/



    //buscar todos los elementos de un tipo
    //cy.get('input[id="Model_UserName"]').type('admin'); //detectar un elemento
  })
})*/

//(usuario.tieneExceso AND usuario.tieneNegociacion AND usuario.aplicaDeducibleNegociacion) OR 
//(usuario.tieneExceso AND !usuario.tieneNegociacion AND beneficio!=null AND beneficio.First().aplicaDeducibleExceso) OR
//(!usuario.tieneExceso AND usuario.tieneNegociacion AND usuario.aplicaDeducibleNegociacion) OR
//(!usuario.tieneExceso AND !usuario.tieneNegociacion AND beneficio!=null AND beneficio.First().aplicaDeducible)