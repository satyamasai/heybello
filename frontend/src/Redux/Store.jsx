import { legacy_createStore } from "redux";
import appreducer from './App/appreducer';

const store= legacy_createStore(appreducer);

export default store