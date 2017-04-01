/*
* Calculates center points of 2 circles and the
* vector between by using Pythagorean theorem.
* If distance < totalRadii, than they are colliding
*/
function hitTestCircle(c1, c2) {
	var vx = c1.centerX() - c2.centerX();
	var vy = c1.centerY() - c2.centerY();
	var distance = Math.sqrt(vx * vx + vy * vy);
	var totalRadii = c1.halfWidth() + c2.halfWidth();
	var hit = distance < totalRadii;
	return hit;
}

/*
* Calculates center points of 2 rectangles and the
* vector between. If vx and vy are less than 
* combinedHalfWidths/Heights, then they are colliding
*/
function hitTestRectangle(r1, r2) {
	var hit = false;
	var vx = r1.centerX() - r2.centerX();
	var vy = r1.centerY() - r2.centerY();
	var combinedHalfWidths = r1.halfWidth() + r2.halfWidth();
	var combinedHalfHeights = r1.halfHeight() + r2.halfHeight();

	if(Math.abs(vx) < combinedHalfWidths) {
		if(Math.abs(vy) < combinedHalfHeights) {
		  hit = true;
		}
		else {
		  hit = false;
		}   
	}
	else {
		hit = false;
	}
	return hit;
}

/*
* Prevents collisions from overlap.
*/
function blockRectangle(r1, r2) {
	var collisionSide = "";
	var vx = r1.centerX() - r2.centerX();
	var vy = r1.centerY() - r2.centerY();
	var combinedHalfWidths = r1.halfWidth() + r2.halfWidth();
	var combinedHalfHeights = r1.halfHeight() + r2.halfHeight();
	
	if(Math.abs(vx) < combinedHalfWidths) {
		if(Math.abs(vy) < combinedHalfHeights) {
			var overlapX = combinedHalfWidths - Math.abs(vx);
			var overlapY = combinedHalfHeights - Math.abs(vy);
			
			if(overlapX >= overlapY) {
				if(vy > 0) {
					collisionSide = "top";
					r1.y = r1.y + overlapY;
				}
				else {
					collisionSide = "bottom";
					r1.y = r1.y - overlapY;
				}
			} 
			else {
				if(vx > 0) {
					collisionSide = "left";
					r1.x = r1.x + overlapX;
				}
				else {
					collisionSide = "right";
					r1.x = r1.x - overlapX;
				}
			} 
		}
		else {
			collisionSide = "none";
		}
	} 
	else {
		collisionSide = "none";
	}

	return collisionSide;
}