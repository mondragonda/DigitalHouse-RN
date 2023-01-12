import { MOVEMENT_TYPE } from "./constants";

const getTotalPointsForMovement = (movements, movementType) => movements
    .filter(movement => {
        switch (movementType) {
            case MOVEMENT_TYPE.obtained:
                return !movement.is_redemption;
            case MOVEMENT_TYPE.redeemed:
                return movement.is_redemption;
            default:
                throw Error('Unknown movement type.')
        }
    })
    .map((movement) => movement.points)
    .reduce(((lastPointsTotal, points) => lastPointsTotal + points), 0);


const calculateMonthlyTotalPoints = (movements) => {
    const obtainedPoints = getTotalPointsForMovement(movements, MOVEMENT_TYPE.obtained);
    const redeemedPoints = getTotalPointsForMovement(movements, MOVEMENT_TYPE.redeemed);
    return obtainedPoints - redeemedPoints;
}


const filterMovementsByRedeemed = (movements) => movements.filter((movement) => movement.is_redemption);

const filterMovementsByObtained = (movements) => movements.filter((movement) => !movement.is_redemption);

export { calculateMonthlyTotalPoints, filterMovementsByRedeemed, filterMovementsByObtained };