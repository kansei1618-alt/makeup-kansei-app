import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export default function MakeupFaceAppPrototype() {
return ( <div className="min-h-screen flex items-center justify-center bg-pink-50 p-10"> <div className="rounded-3xl bg-white p-10 shadow-2xl text-center max-w-xl"> <h1 className="text-4xl font-bold text-rose-500 mb-4">
顔写真メイク・シミュレーター </h1>

```
    <p className="text-slate-600 leading-relaxed">
      GitHub公開用の簡易版です。<br />
      このあと本格版コードへ差し替えていきます。
    </p>

    <div className="mt-8 text-7xl">
      💄
    </div>
  </div>
</div>
```

);
}
