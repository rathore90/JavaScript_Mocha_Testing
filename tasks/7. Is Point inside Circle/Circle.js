import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      // console.log("center points ", center.x);
      // console.log("radius ", radius);
      // console.log("points ", Point.x);
      
      if ((Point.x - center.x) * (Point.x - center.x) + 
          (Point.y - center.y) * (Point.y - center.y) <= radius * radius)
        return true;
      else
        return false;
    }
  }
}
