import { SCSGData } from "./routine/SCSGData.js";
import { SCSGGetCharacterInfos, SCSGSetCharacterInfos } from "./routine/SCSGInfos.js";
import { SCSGGetSettings } from "./routine/SCSGSettings.js";
import { SCSGUpdater } from "./routine/SCSGUpdater.js";

let settings;
let characterInfos;

export function SCSGInitialize() {
    initializeGenerator();
    saveGeneration();
    publishGeneration();
}

function initializeGenerator() {
    settings = SCSGGetSettings();
    characterInfos = SCSGData(settings);
}

function saveGeneration() {
    SCSGSetCharacterInfos(characterInfos);
}

function publishGeneration() {
    SCSGUpdater(SCSGGetCharacterInfos());
}