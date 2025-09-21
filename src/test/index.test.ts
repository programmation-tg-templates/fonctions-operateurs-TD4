// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {estMultiple, estImpairs} from '../index';

describe('Vérifier si un nombre est un multiple d’un autre', () => {
    test('15 est un multiple de 5', () => {
        expect(estMultiple(15, 5)).toEqual(true);
    });

    test('14 n’est pas un multiple de 3', () => {
        expect(estMultiple(14, 3)).toEqual(false);
    });
});

describe('Vérifier si ces nombres sont impairs ', () => {
    test('15 et 5 sont des nombres impairs.', () => {
        expect(estImpairs(15, 5)).toEqual(true);
    });

    test('14 et 3 ne sont pas des nombres impairs.', () => {
        expect(estImpairs(14, 3)).toEqual(false);
    });
});
