import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-kisaki",
  slug: "kisaki",
  title: "Kisaki",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["zh-cn","ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 18,
    "lines": [
      {
        "id": "ch0139_memoriallobby_1_1",
        "text": {
          "zh-cn": "呵呵……可算肯正眼瞧妾身了？",
          "ja": "ふふ……ようやくこちらを見てくれたかの。",
          "ko": "후후… 드디어 이쪽을\n바라보아 주는구나.",
          "en": "Fufu... You're finally looking directly at me."
        }
      },
      {
        "id": "ch0139_memoriallobby_1_2",
        "text": {
          "zh-cn": "只是先生啊。你不妨细想一想。",
          "ja": "じゃが、先生。一度考えてみてくれぬか？",
          "ko": "하지만 말이다, 선생.\n한 번 생각해 보는 것이\n어떨까.",
          "en": "But, Sensei. Perhaps there's something to consider."
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 15.000000953674316,
    "lines": [
      {
        "id": "ch0139_memoriallobby_2_1",
        "text": {
          "zh-cn": "此刻妾身，安知是当真力怯……",
          "ja": "妾は今、弱っているのかもしれぬが……",
          "ko": "나는 이 순간 정말\n약해져 있는 것일 수도 있고…",
          "en": "Maybe I truly am vulnerable right now."
        }
      },
      {
        "id": "ch0139_memoriallobby_2_2",
        "text": {
          "zh-cn": "还是故作娇态呢？",
          "ja": "弱ったふりをしているだけかもしれぬ。",
          "ko": "사실은 약해진 척하고\n있을 뿐인지도 모르지?",
          "en": "...Or perhaps I am simply pretending?"
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 20.33333396911621,
    "lines": [
      {
        "id": "ch0139_memoriallobby_3_1",
        "text": {
          "zh-cn": "又许是……专要试探你如何应对呢？",
          "ja": "あるいは……先生の出方を伺っているだけなのやも。",
          "ko": "혹은… 선생의 반응을\n떠 보고 있다거나.",
          "en": "Or am I testing how you would respond?"
        }
      },
      {
        "id": "ch0139_memoriallobby_3_2",
        "text": {
          "zh-cn": "只怕是——将全副心肠都托付与你了？",
          "ja": "単に――其方を心から信じているだけかもしれぬしな？",
          "ko": "단지―그대를 깊이\n믿고 있는 것일수도 있다.",
          "en": "Maybe...I simply trust you deeply."
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 12.000000953674316,
    "lines": [
      {
        "id": "ch0139_memoriallobby_4",
        "text": {
          "zh-cn": "不过……也对。有桩事可与你作保。",
          "ja": "だが……そうじゃな、これだけは確約できる。",
          "ko": "하지만… 그래, 이것만은\n약속할 수 있을 듯하구나.",
          "en": "But...there is one thing I can say with certainty."
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 17,
    "lines": [
      {
        "id": "ch0139_memoriallobby_5_1",
        "text": {
          "zh-cn": "无论在此处发生什么事……",
          "ja": "此処で何が起こったとて……",
          "ko": "여기서 무슨 일이\n일어나더라도…",
          "en": "Even if something happens here..."
        }
      },
      {
        "id": "ch0139_memoriallobby_5_2",
        "text": {
          "zh-cn": "妾身断不会怨你分毫……永远都不会。",
          "ja": "妾が其方を責めることは無いじゃろう。……永劫にな。",
          "ko": "나는 그대를 탓하지\n않을 것이다.\n…영원히, 말이지.",
          "en": "I won't blame you...and I mean ever."
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
