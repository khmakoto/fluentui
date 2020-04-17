import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const VennDiagramIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M1503 545q121 38 221 109t173 168 111 214 40 244q0 106-27 204t-78 183-120 156-155 120-184 77-204 28q-128 0-244-39t-213-112-169-172-109-222q-122-37-222-109t-172-168-111-213T0 768q0-106 27-204t78-183 120-156 155-120 184-77T768 0q127 0 244 39t213 112 168 172 110 222zM128 768q0 96 27 185t79 167 122 137 160 99q-2-19-3-38t-1-38q0-106 27-204t78-183 120-156 155-120 184-77 204-28q19 0 38 1t38 3q-38-88-98-159t-138-123-166-78-186-28q-88 0-170 23t-153 64-129 100-100 130-65 153-23 170zm512 512q0 56 11 117 61 11 117 11 40 0 79-5t78-14l-266-266q-9 38-14 77t-5 80zm402 67q73-36 137-89L790 869q-53 64-89 137l341 341zm216-168q53-64 89-137l-341-341q-73 36-137 89l389 389zm150-411q0-56-11-117-61-11-117-11-40 0-79 5t-78 14l266 266q9-38 14-77t5-80zm-128 1152q88 0 170-23t153-64 129-100 100-130 65-153 23-170q0-96-27-185t-79-167-122-137-160-99q2 19 3 38t1 38q0 106-27 204t-78 183-120 156-155 120-184 77-204 28q-19 0-38-1t-38-3q38 88 98 159t138 123 166 78 186 28z" />
    </svg>
  ),
  displayName: 'VennDiagramIcon',
});

export default VennDiagramIcon;
