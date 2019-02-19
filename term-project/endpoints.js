// Look into using promises for this instead.
function get(uri) {
  return (predicate) => {
    $.getJSON(uri, data => {
      predicate(data);
    });
  };
}

const URIBASE = 'http://judah.cedarville.edu/~gallaghd';

let getCombinedCourses = get(`${URIBASE}/cs3220/termProject/getCombined.php`);
let getRequirements    = get(`${URIBASE}/cs3220/termProject/getRequirements.php`);
let kelleyBlueBook     = get(`${URIBASE}/ymm/ymmdb.php`);
