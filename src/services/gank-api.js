/**
 * Created by zeven on 2017/6/7.
 */
import axios from 'axios';
let host = 'http://gank.io/api';

export function randomFront() {
  axios.get(host+'/random/data/前端/15')
}