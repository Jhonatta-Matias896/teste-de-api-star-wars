it('Teste 01: Validação da pesquisa por Luke Skywalker ', () => {
    cy.request({
        method: "GET",
        url: "/people/1/"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('Luke Skywalker');
        expect(response.body.height).to.eq('172')
        expect(response.body.mass).to.eq('77')
        expect(response.body.hair_color).to.eq('blond')
        expect(response.body.skin_color).to.eq('fair')
        expect(response.body.eye_color).to.eq('blue')
        expect(response.body.films).to.deep.equal([
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ]);
    });
});
it('Teste 02: Validação da pesquisa por C-3PO ', () => {
    cy.request({
        method: "GET",
        url: "/people/2/"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('C-3PO');
        expect(response.body.height).to.eq('167')
        expect(response.body.mass).to.eq('75')
        expect(response.body.skin_color).to.eq('gold')
        expect(response.body.eye_color).to.eq('yellow')
        expect(response.body.films).to.deep.equal([
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ]);
    });
});

it('Teste 03: Validação da pesquisa por R2-D2 ', () => {
    cy.request({
        method: "GET",
        url: "/people/3/"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('R2-D2');
        expect(response.body.height).to.eq('96')
        expect(response.body.mass).to.eq('32')
        expect(response.body.skin_color).to.eq('white, blue')
        expect(response.body.eye_color).to.eq('red')
        expect(response.body.films).to.deep.equal([
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ]);
    });
});
it('Teste 04: Validação da pesquisa por Darth Vader ', () => {
    cy.request({
        method: "GET",
        url: "/people/4/"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('Darth Vader');
        expect(response.body.height).to.eq('202')
        expect(response.body.mass).to.eq('136')
        expect(response.body.skin_color).to.eq('white')
        expect(response.body.eye_color).to.eq('yellow')
        expect(response.body.films).to.deep.equal([
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ]);
    });
});
it('Teste 05: Validação da pesquisa por Leia Organa ', () => {
    cy.request({
        method: "GET",
        url: "/people/5/"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('Leia Organa');
        expect(response.body.height).to.eq('150')
        expect(response.body.mass).to.eq('49')
        expect(response.body.skin_color).to.eq('light')
        expect(response.body.hair_color).to.eq('brown')
        expect(response.body.eye_color).to.eq('brown')
        expect(response.body.films).to.deep.equal([
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ]);
    });
});
it('Teste 06: Validação da pesquisa por Owen Lars ', () => {
    cy.request({
        method: "GET",
        url: "/people/6/"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.deep.equal({
            "name": "Owen Lars",
            "height": "178",
            "mass": "120",
            "hair_color": "brown, grey",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "52BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:52:14.024000Z",
            "edited": "2014-12-20T21:17:50.317000Z",
            "url": "https://swapi.dev/api/people/6/"
        });
    });
});