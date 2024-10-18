const { CommonPageData } = require("../pages/common-page/common-page.data")
const { CommonPageMethos } = require("../pages/common-page/common-page.methods")
const { SignupMethods } = require("../pages/signup/signup.methods")

describe(CommonPageData.testSuites.registroYAutenticacion, () => {
  it("Registro de usuario válido 1", () => {

    CommonPageMethos.navigateToDemoBla();
    CommonPageMethos.clickOnSignUpOption();
    SignupMethods.insertUsername("random01");
    SignupMethods.insertPassword("random01");
    SignupMethods.clickOnSingup();
    SignupMethods.verifySingUpSuccesfulMessageIsDisplayed();
    cy.wait(2000);

    /*Paso 1: Navegar a la página de inicio.
    Paso 2: Hacer clic en "Sign up" en la barra de navegación.
    Paso 3: Completar todos los campos obligatorios con información válida.
    Paso 4: Hacer clic en "Sign up" para registrar el usuario.
    Paso 5: Verificar que se redirige al usuario a la página de inicio de sesión.*/
    
  });
});