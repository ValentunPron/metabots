import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Robot } from '../../pages/Robot';
import { IRobot } from '../../types/IRobot';

export const RobotPages = (): JSX.Element => {
	const params = useParams();

	const robots = useSelector((state: any) => state.robots.robots.items);

	const currentItem = robots.filter((robot: IRobot) => String(robot.id) === String(params.id));

	console.log(currentItem[0]);

	return <Robot currentItem={currentItem[0]} />
}