import {faker} from '@faker-js/faker'; //https://fakerjs.dev/api/
import {config} from '../config';
import {LooseObject} from 'src/interfaces';

const db = config.db;

type Type = 'phase'|'task'|'status'


export const find = (type: Type, key: string, value: unknown) => {
    const items = findAll(type);
    const item = items.find(el => el[key] == value);

    if (item) return item;
    else throw new Error(`Item not found: "${type} - ${key}=${value}"`);
};


export const findAll = (type: Type): LooseObject[] => {
    return db
        .keys()
        .filter(key => key.startsWith(type))
        .map(key => db.get(key)) as LooseObject[];
};


export const save = (type: Type, value: LooseObject, id ?: number) => {
    if (id) {
        const items = findAll(type);
        const index = items.findIndex(el => el.id === id);
        const keys = db
            .keys()
            .filter(key => key.startsWith(type));
        const key = keys[index];

        return db.set(key, {
            ...items[index],
            ...value
        });
    }
    else if (type === 'task') {
        // if phaseId doesn't exist, it will throw an error
        if (value?.phaseId) find('phase', 'id', value.phaseId);
    }

    const currentTypeMaxId = 'current' + type.charAt(0).toUpperCase() + type.slice(1) + 'Id';
    const index = Number(db.get(currentTypeMaxId)) + 1;

    db.set(type + index, {
        ...value,
        id: index
    });
    db.set(currentTypeMaxId, index);
};


export const seedData = () => {
    db.set('currentPhaseId', 3);
    db.set('currentTaskId', 8);
    db.set('phase1', {id: 1, name: 'foundation'});
    db.set('phase2', {id: 2, name: 'discovery'});
    db.set('phase3', {id: 3, name: 'delivery'});
    db.set('status1', {id: 1, name: 'opened'});
    db.set('status2', {id: 2, name: 'reopened'});
    db.set('status3', {id: 3, name: 'completed'});
    db.set('task1', {
        id         : 1,
        phaseId    : 1,
        title      : 'Setup virtual office',
        description: faker.lorem.sentence(5),
        statusId   : 3,
    });
    db.set('task2', {
        id         : 2,
        phaseId    : 1,
        title      : 'Set mission & vision',
        description: faker.lorem.sentence(5),
        statusId   : 3,
    });
    db.set('task3', {
        id         : 3,
        phaseId    : 1,
        title      : 'Select business name',
        description: faker.lorem.sentence(5),
        statusId   : 3,
    });
    db.set('task4', {
        id         : 4,
        phaseId    : 1,
        title      : 'Buy domains',
        description: faker.lorem.sentence(5),
        statusId   : 3,
    });
    db.set('task5', {
        id         : 5,
        phaseId    : 2,
        title      : 'Create roadmap',
        description: faker.lorem.sentence(5),
        statusId   : 3,
    });
    db.set('task6', {
        id         : 6,
        phaseId    : 2,
        title      : 'Competitor analysis',
        description: faker.lorem.sentence(5),
        statusId   : 1,
    });
    db.set('task7', {
        id         : 7,
        phaseId    : 3,
        title      : 'Release marketing website',
        description: faker.lorem.sentence(5),
        statusId   : 1,
    });
    db.set('task8', {
        id         : 8,
        phaseId    : 3,
        title      : 'Release MVP',
        description: faker.lorem.sentence(5),
        statusId   : 1,
    });
};