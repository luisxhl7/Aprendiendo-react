
describe('Pruebas en <DemoComponent />', () => {     
    test('Primera prueba', () => {
        //inicializacion
        const message1 = 'hola mundo';
        //estimulo
        const message2 = message1.trim(); 
        //observar el comportamiento... esperado
        expect( message1 ).toBe( message2 );
    })
})