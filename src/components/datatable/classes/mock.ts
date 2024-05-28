import type MockAdapter from "axios-mock-adapter";

class DataTableMock {
    public defaultData = {
        addButtonLabel: 'Add client',
        headers: ['id', 'name', 'address', 'zip'],
        form: {
            fields: [
                {
                    key: 'firstname',
                    type: 'text',
                    label: 'Legal first name',
                    size: {sm: 6, md: 4},
                    hint: 'example of helper text only on focus',
                    validator: {name: 'presence', parameters: {}}
                },
                {
                    key: 'middlename',
                    type: 'text',
                    label: 'Legal middle name',
                    size: {sm: 6, md: 4},
                    hint: 'example of helper text only on focus 2'
                },
                {
                    key: 'lastname',
                    type: 'text',
                    label: 'Legal last name',
                    size: {sm: 6, md: 4},
                    hint: 'example of helper text only on focus 3'
                },
                {
                    key: 'email',
                    type: 'text',
                    label: 'E-mail address',
                    validator: {name: 'email', parameters: {required: true}}
                },
                {
                    key: 'password',
                    type: 'text',
                    label: 'Password',
                },
                {
                    key: 'zip',
                    type: 'text',
                    label: 'Zip code',
                    validator: {name: 'server', parameters: {name: 'postalcode'}}
                },
                {
                    key: 'age',
                    type: 'select',
                    label: 'Age',
                    items: [
                        {key: '0-17', value: '0-17'},
                        {key: '18-29', value: '18-29'},
                        {key: '30-54', value: '30-54'},
                        {key: '54+', value: '54+'}
                    ],
                    size: {sm: 6},
                },
                {
                    key: 'interests',
                    type: 'autocomplete',
                    multiple: true,
                    label: 'Interests',
                    items: [
                        {key: '1', value: 'Skiing'},
                        {key: '2', value: 'Ice hockey'},
                        {key: '3', value: 'Soccer'},
                        {key: '4', value: 'Basketball'},
                        {key: '5', value: 'Hockey'},
                        {key: '6', value: 'Reading'},
                        {key: '7', value: 'Writing'},
                        {key: '8', value: 'Coding'},
                        {key: '9', value: 'Basejump'},
                    ],
                    size: {sm: 6},
                },
                {
                    key: 'hobbies',
                    type: 'datatable',
                    label: 'Hobbies',
                    instance: 'hobbies',
                },
            ],
        },
        data: [
            {id: 'a1', data: ['a1', 'Peter', 'Peterstreet 17', '12345']},
            {id: 'a2', data: ['a2', 'John', 'Johnstreet 17', '23456']},
            {id: 'a3', data: ['a3', 'Susan', 'Susanstreet 17', '34567']},
            {id: 'a4', data: ['a4', 'Henry', 'Henrystreet 17', '45678']},
            {id: 'a5', data: ['a5', 'Naomi', 'Naomistreet 17', '56789']},
            {id: 'a6', data: ['a6', 'Peter', 'Peterstreet 17', '12345']},
            {id: 'a7', data: ['a7', 'John', 'Johnstreet 17', '23456']},
            {id: 'a8', data: ['a8', 'Susan', 'Susanstreet 17', '34567']},
            {id: 'a9', data: ['a9', 'Henry', 'Henrystreet 17', '45678']},
            {id: 'a10', data: ['a10', 'Naomi', 'Naomistreet 17', '56789']},
            {id: 'a11', data: ['a11', 'Peter', 'Peterstreet 17', '12345']},
            {id: 'a12', data: ['a12', 'John', 'Johnstreet 17', '23456']},
            {id: 'a13', data: ['a13', 'Susan', 'Susanstreet 17', '34567']},
            {id: 'a14', data: ['a14', 'Henry', 'Henrystreet 17', '45678']},
            {id: 'a15', data: ['a15', 'Naomi', 'Naomistreet 17', '56789']},
            {id: 'a16', data: ['a16', 'Peter', 'Peterstreet 17', '12345']},
            {id: 'a17', data: ['a17', 'John', 'Johnstreet 17', '23456']},
            {id: 'a18', data: ['a18', 'Susan', 'Susanstreet 17', '34567']},
            {id: 'a19', data: ['a19', 'Henry', 'Henrystreet 17', '45678']},
            {id: 'a20', data: ['a20', 'Naomi', 'Naomistreet 17', '56789']},
            {id: 'a21', data: ['a21', 'Peter', 'Peterstreet 17', '12345']},
            {id: 'a22', data: ['a22', 'John', 'Johnstreet 17', '23456']},
            {id: 'a23', data: ['a23', 'Susan', 'Susanstreet 17', '34567']},
            {id: 'a24', data: ['a24', 'Henry', 'Henrystreet 17', '45678']},
            {id: 'a25', data: ['a25', 'Naomi', 'Naomistreet 17', '56789']},
            {id: 'a26', data: ['a26', 'Peter', 'Peterstreet 17', '12345']},
            {id: 'a27', data: ['a27', 'John', 'Johnstreet 17', '23456']},
            {id: 'a28', data: ['a28', 'Susan', 'Susanstreet 17', '34567']},
            {id: 'a29', data: ['a29', 'Henry', 'Henrystreet 17', '45678']},
            {id: 'a30', data: ['a30', 'Naomi', 'Naomistreet 17', '56789']},
            {id: 'a31', data: ['a31', 'Peter', 'Peterstreet 17', '12345']},
            {id: 'a32', data: ['a32', 'John', 'Johnstreet 17', '23456']},
            {id: 'a33', data: ['a33', 'Susan', 'Susanstreet 17', '34567']},
            {id: 'a34', data: ['a34', 'Henry', 'Henrystreet 17', '45678']},
            {id: 'a35', data: ['a35', 'Naomi', 'Naomistreet 17', '56789']},
            {id: 'a36', data: ['a36', 'Peter', 'Peterstreet 17', '12345']},
            {id: 'a37', data: ['a37', 'John', 'Johnstreet 17', '23456']},
            {id: 'a38', data: ['a38', 'Susan', 'Susanstreet 17', '34567']},
            {id: 'a39', data: ['a39', 'Henry', 'Henrystreet 17', '45678']},
            {id: 'a40', data: ['a40', 'Naomi', 'Naomistreet 17', '56789']},
        ],
        instance: 'clients',
    };

    public subDataTableData = {
        addButtonLabel: 'Add hobby',
        headers: ['id', 'name'],
        form: {
            fields: [
                {
                    key: 'name',
                    type: 'text',
                    label: 'Name of hobby',
                    validator: {name: 'presence', parameters: {}}
                },
            ],
        },
        data: [
            {id: 1, data: [1, 'Fitness']},
            {id: 2, data: [2, 'Gaming']},
            {id: 3, data: [3, 'Sup']},
        ],
        instance: 'test',
    };

    mock(mocker: MockAdapter) {
        mocker.onGet("/api/datatable").reply((request) => {

            let dataTableSettings = this.getDataForInstance(request.params.instance);

            let params = {settings: dataTableSettings};

            return [200, params];
        });

        mocker.onGet("/api/datatable/edit").reply(() => {
            return [200, this.getEditData()];
        });

        mocker.onGet("/api/datatable/save").reply((request) => {
            let newData = request.params.data;
            let id      = request.params.id;

            let index;

            let editData = this.getDataForInstance(request.params.instance).data;

            if (id) {
                index = this.getIndexById(editData, id);
                console.log(index);
            } else {
                index = parseInt(Object.keys(editData)[Object.keys(editData).length - 1]) + 1;
            }

            switch (request.params.instance) {
                case 'hobbies':
                    editData[index] = {id: id, data: [id, newData.name]};
                    break;
                case 'clients':
                    editData[index] = {id: id, data: [id, newData.firstname, newData.address, newData.zip]};
                    break;
            }

            this.getDataForInstance(request.params.instance).data = editData;

            return [200, editData];
        });

        mocker.onPost("/api/datatable/validate").reply((request) => {
            let params         = JSON.parse(request.data).params;
            let validated: any = 'Invalid';

            if (params.name === 'postalcode') {
                validated = (/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(params.value)) ? true : 'Invalid postal code';
            }

            return [200, validated];
        });
    }

    getDataForInstance(instance: string): any {
        switch (instance) {
            case 'hobbies':
                return this.getSubDataTableData();
            case 'clients':
                return this.getDefaultData();
        }
    }

    getDefaultData() {
        return this.defaultData;
    }

    getSubDataTableData() {
        return this.subDataTableData;
    }

    getPagesData() {
        let data = [
            {id: '1', data: [1, {'label': 'Home', 'icons': ['lock']}, 'home', 'home']},
            {id: '2', data: [2, 'About', 'default', 'about']},
            {id: '4', data: [4, 'Prices', 'default', 'prices']},
            {
                id: '5', data: [5, 'Projects', 'projects', 'projects'], children: [
                    {id: '6', data: [6, 'Project A', 'project', 'project-A']},
                    {id: '7', data: [7, 'Project B', 'project', 'project-B']},
                    {id: '8', data: [8, 'Project C', 'project', 'project-C']},
                ]
            },
            {id: '3', data: [3, 'Contact', 'contact', 'contact']},
        ];

        return {
            addButtonLabel: 'Add page',
            headers: ['id', 'name', 'template', 'slug'],
            cells: {'name': {'type': 'page'}},
            data: data,
            instance: 'pagesTest',
            class: 'pages',
        };
    }

    getEditData(): any {
        return {
            firstname: 'Peter',
            lastname: 'Peterson',
            middlename: 'von',
            email: 'peter@peter.com',
            password: 'somepass',
            zip: '12345',
            age: '18-29',
            interests: ["1", "2"],
            address: 'Peterstreet 17',
        };
    }

    /**
     * @param data
     * @param id
     */
    getIndexById(data: any, id: number | string): number {
        let foundIndex = 0;

        data.forEach((row: any, index: number) => {
            if (id == row.id) {
                foundIndex = index;
            }
        });

        return foundIndex;
    }
}

export default new DataTableMock();