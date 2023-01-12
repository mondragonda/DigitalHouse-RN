/**
 * @format
 */

import 'react-native';
import { calculateMonthlyTotalPoints, filterMovementsByObtained, filterMovementsByRedeemed } from '../product-movement-service';


describe('Product movement service', () => {

    const mockMovements = [{
            points: 10,
            is_redemption: true
        },
        {
            points: 100,
            is_redemption: false
        }
    ]

    it('correctly calculates total points for monthly movements', () => {
        const expectedTotal = 90;
        const calculatedTotal = calculateMonthlyTotalPoints(mockMovements)
        expect(calculatedTotal).toEqual(expectedTotal);
    });


    it('correctly returns only all redeemed points movements', () => {
        const redeemedPointsMovements = filterMovementsByRedeemed(mockMovements);
        expect(redeemedPointsMovements.every((movement) => movement.is_redemption)).toBeTruthy();
    });


    it('correctly returns only all obtained points movements', () => {
        const obtainedPointsMovements = filterMovementsByObtained(mockMovements);
        expect(obtainedPointsMovements.every((movement) => !movement.is_redemption)).toBeTruthy();
    });
});