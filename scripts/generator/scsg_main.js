import { SCSGData } from "./routine/scsg_data.js";
import { SCSGGetCharacterInfos, SCSGSetCharacterInfos } from "./routine/scsg_infos.js";
import { SCSGGetSettings } from "./routine/scsg_settings.js";
import { SCSGUpdater } from "./routine/scsg_updater.js";

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