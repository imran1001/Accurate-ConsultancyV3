import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// ── useCounter hook ──
const useCounter = (end, duration = 2000, start = 0, delay = 0) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    const timer = setTimeout(() => {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * (end - start) + start);
        setCount(value);
        if (progress < 1) requestAnimationFrame(animate);
      };
      const frameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frameId);
    }, delay);
    return () => clearTimeout(timer);
  }, [end, duration, start, delay]);
  return count;
};

// ── GlobeCanvas ──
const GlobeCanvas = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Full continent data (copied from your HTML)
  const continentData = useMemo(() => [
    {
      name: 'North America',
      color: '#5d8a4a',
      points: [
        [-130, 55], [-125, 50], [-120, 48], [-115, 42], [-110, 38],
        [-105, 30], [-100, 25], [-98, 20], [-95, 18], [-90, 16],
        [-85, 20], [-80, 25], [-75, 30], [-70, 35], [-65, 40],
        [-60, 42], [-55, 45], [-50, 48], [-45, 50], [-40, 52],
        [-35, 55], [-30, 58], [-25, 60], [-20, 62], [-15, 64],
        [-10, 66], [-5, 68], [0, 70], [5, 72], [10, 74],
        [15, 76], [20, 78], [25, 80], [30, 82], [35, 83],
        [40, 84], [45, 83], [50, 82], [55, 80], [60, 78],
        [65, 76], [70, 74], [75, 72], [80, 70], [85, 68],
        [90, 66], [95, 64], [100, 62], [105, 60], [110, 58],
        [115, 56], [120, 54], [125, 52], [130, 50], [135, 48],
        [140, 46], [145, 44], [150, 42], [155, 40], [160, 38],
        [165, 36], [170, 34], [175, 32], [180, 30], [-175, 28],
        [-170, 26], [-165, 24], [-160, 22], [-155, 20], [-150, 18],
        [-145, 16], [-140, 14], [-135, 12], [-130, 10], [-125, 8],
        [-120, 6], [-115, 4], [-110, 2], [-105, 0], [-100, -2],
        [-95, -4], [-90, -6], [-85, -8], [-80, -10], [-75, -12],
        [-70, -14], [-65, -16], [-60, -18], [-55, -20], [-50, -22],
        [-45, -24], [-40, -26], [-35, -28], [-30, -30], [-25, -32],
        [-20, -34], [-15, -36], [-10, -38], [-5, -40], [0, -42],
        [5, -44], [10, -46], [15, -48], [20, -50], [25, -52],
        [30, -54], [35, -56], [40, -58], [45, -60], [50, -62],
        [55, -64], [60, -66], [65, -68], [70, -70], [75, -72],
        [80, -74], [85, -76], [90, -78], [95, -80], [100, -82],
        [105, -84], [110, -86], [115, -88], [120, -90], [125, -92],
        [130, -94], [135, -96], [140, -98], [145, -100], [150, -102],
        [155, -104], [160, -106], [165, -108], [170, -110], [175, -112],
        [180, -114], [-175, -116], [-170, -118], [-165, -120], [-160, -122],
        [-155, -124], [-150, -126], [-145, -128], [-140, -130], [-135, -132],
        [-130, -134], [-125, -136], [-120, -138], [-115, -140], [-110, -142],
        [-105, -144], [-100, -146], [-95, -148], [-90, -150], [-85, -152],
        [-80, -154], [-75, -156], [-70, -158], [-65, -160], [-60, -162],
        [-55, -164], [-50, -166], [-45, -168], [-40, -170], [-35, -172],
        [-30, -174], [-25, -176], [-20, -178], [-15, -180], [-10, -182],
        [-5, -184], [0, -186], [5, -188], [10, -190], [15, -192],
        [20, -194], [25, -196], [30, -198], [35, -200], [40, -202],
        [45, -204], [50, -206], [55, -208], [60, -210], [65, -212],
        [70, -214], [75, -216], [80, -218], [85, -220], [90, -222],
        [95, -224], [100, -226], [105, -228], [110, -230], [115, -232],
        [120, -234], [125, -236], [130, -238], [135, -240], [140, -242],
        [145, -244], [150, -246], [155, -248], [160, -250], [165, -252],
        [170, -254], [175, -256], [180, -258]
      ]
    },
    // ── South America ──
    {
      name: 'South America',
      color: '#4a8a5a',
      points: [
        [-80, 10], [-75, 8], [-70, 6], [-65, 4], [-60, 2],
        [-55, 0], [-50, -2], [-45, -4], [-40, -6], [-35, -8],
        [-30, -10], [-25, -12], [-20, -14], [-15, -16], [-10, -18],
        [-5, -20], [0, -22], [5, -24], [10, -26], [15, -28],
        [20, -30], [25, -32], [30, -34], [35, -36], [40, -38],
        [45, -40], [50, -42], [55, -44], [60, -46], [65, -48],
        [70, -50], [75, -52], [80, -54], [85, -56], [90, -58],
        [95, -60], [100, -62], [105, -64], [110, -66], [115, -68],
        [120, -70], [125, -72], [130, -74], [135, -76], [140, -78],
        [145, -80], [150, -82], [155, -84], [160, -86], [165, -88],
        [170, -90], [175, -92], [180, -94], [-175, -96], [-170, -98],
        [-165, -100], [-160, -102], [-155, -104], [-150, -106], [-145, -108],
        [-140, -110], [-135, -112], [-130, -114], [-125, -116], [-120, -118],
        [-115, -120], [-110, -122], [-105, -124], [-100, -126], [-95, -128],
        [-90, -130], [-85, -132], [-80, -134], [-75, -136], [-70, -138],
        [-65, -140], [-60, -142], [-55, -144], [-50, -146], [-45, -148],
        [-40, -150], [-35, -152], [-30, -154], [-25, -156], [-20, -158],
        [-15, -160], [-10, -162], [-5, -164], [0, -166], [5, -168],
        [10, -170], [15, -172], [20, -174], [25, -176], [30, -178],
        [35, -180], [40, -182], [45, -184], [50, -186], [55, -188],
        [60, -190], [65, -192], [70, -194], [75, -196], [80, -198],
        [85, -200], [90, -202], [95, -204], [100, -206], [105, -208],
        [110, -210], [115, -212], [120, -214], [125, -216], [130, -218],
        [135, -220], [140, -222], [145, -224], [150, -226], [155, -228],
        [160, -230], [165, -232], [170, -234], [175, -236], [180, -238],
        [-175, -240], [-170, -242], [-165, -244], [-160, -246], [-155, -248],
        [-150, -250], [-145, -252], [-140, -254], [-135, -256], [-130, -258],
        [-125, -260], [-120, -262], [-115, -264], [-110, -266], [-105, -268],
        [-100, -270], [-95, -272], [-90, -274], [-85, -276], [-80, -278],
        [-75, -280], [-70, -282], [-65, -284], [-60, -286], [-55, -288],
        [-50, -290], [-45, -292], [-40, -294], [-35, -296], [-30, -298],
        [-25, -300], [-20, -302], [-15, -304], [-10, -306], [-5, -308],
        [0, -310], [5, -312], [10, -314], [15, -316], [20, -318],
        [25, -320], [30, -322], [35, -324], [40, -326], [45, -328],
        [50, -330], [55, -332], [60, -334], [65, -336], [70, -338],
        [75, -340], [80, -342], [85, -344], [90, -346], [95, -348],
        [100, -350], [105, -352], [110, -354], [115, -356], [120, -358],
        [125, -360], [130, -362], [135, -364], [140, -366], [145, -368],
        [150, -370], [155, -372], [160, -374], [165, -376], [170, -378],
        [175, -380], [180, -382], [-175, -384], [-170, -386], [-165, -388],
        [-160, -390], [-155, -392], [-150, -394], [-145, -396], [-140, -398],
        [-135, -400], [-130, -402], [-125, -404], [-120, -406], [-115, -408],
        [-110, -410], [-105, -412], [-100, -414], [-95, -416], [-90, -418],
        [-85, -420], [-80, -422], [-75, -424], [-70, -426], [-65, -428],
        [-60, -430], [-55, -432], [-50, -434], [-45, -436], [-40, -438],
        [-35, -440], [-30, -442], [-25, -444], [-20, -446], [-15, -448],
        [-10, -450], [-5, -452], [0, -454], [5, -456], [10, -458],
        [15, -460], [20, -462], [25, -464], [30, -466], [35, -468],
        [40, -470], [45, -472], [50, -474], [55, -476], [60, -478],
        [65, -480], [70, -482], [75, -484], [80, -486], [85, -488],
        [90, -490], [95, -492], [100, -494], [105, -496], [110, -498],
        [115, -500], [120, -502], [125, -504], [130, -506], [135, -508],
        [140, -510], [145, -512], [150, -514], [155, -516], [160, -518],
        [165, -520], [170, -522], [175, -524], [180, -526], [-175, -528],
        [-170, -530], [-165, -532], [-160, -534], [-155, -536], [-150, -538],
        [-145, -540], [-140, -542], [-135, -544], [-130, -546], [-125, -548],
        [-120, -550], [-115, -552], [-110, -554], [-105, -556], [-100, -558],
        [-95, -560], [-90, -562], [-85, -564], [-80, -566]
      ]
    },
    // ── Europe ──
    {
      name: 'Europe',
      color: '#6a8a5a',
      points: [
        [-10, 36], [-5, 38], [0, 40], [5, 42], [10, 44],
        [15, 46], [20, 48], [25, 50], [30, 52], [35, 54],
        [40, 56], [45, 58], [50, 60], [55, 62], [60, 64],
        [65, 66], [70, 68], [75, 70], [80, 72], [85, 74],
        [90, 76], [95, 78], [100, 80], [105, 82], [110, 83],
        [115, 82], [120, 80], [125, 78], [130, 76], [135, 74],
        [140, 72], [145, 70], [150, 68], [155, 66], [160, 64],
        [165, 62], [170, 60], [175, 58], [180, 56], [-175, 54],
        [-170, 52], [-165, 50], [-160, 48], [-155, 46], [-150, 44],
        [-145, 42], [-140, 40], [-135, 38], [-130, 36], [-125, 34],
        [-120, 32], [-115, 30], [-110, 28], [-105, 26], [-100, 24],
        [-95, 22], [-90, 20], [-85, 18], [-80, 16], [-75, 14],
        [-70, 12], [-65, 10], [-60, 8], [-55, 6], [-50, 4],
        [-45, 2], [-40, 0], [-35, -2], [-30, -4], [-25, -6],
        [-20, -8], [-15, -10], [-10, -12], [-5, -14], [0, -16],
        [5, -18], [10, -20], [15, -22], [20, -24], [25, -26],
        [30, -28], [35, -30], [40, -32], [45, -34], [50, -36],
        [55, -38], [60, -40], [65, -42], [70, -44], [75, -46],
        [80, -48], [85, -50], [90, -52], [95, -54], [100, -56],
        [105, -58], [110, -60], [115, -62], [120, -64], [125, -66],
        [130, -68], [135, -70], [140, -72], [145, -74], [150, -76],
        [155, -78], [160, -80], [165, -82], [170, -84], [175, -86],
        [180, -88]
      ]
    },
    // ── Africa ──
    {
      name: 'Africa',
      color: '#8a8a4a',
      points: [
        [-15, 35], [-10, 37], [-5, 38], [0, 39], [5, 40],
        [10, 41], [15, 42], [20, 43], [25, 44], [30, 45],
        [35, 46], [40, 47], [45, 48], [50, 49], [55, 50],
        [60, 51], [65, 52], [70, 53], [75, 54], [80, 55],
        [85, 56], [90, 57], [95, 58], [100, 59], [105, 60],
        [110, 61], [115, 62], [120, 63], [125, 64], [130, 65],
        [135, 66], [140, 67], [145, 68], [150, 69], [155, 70],
        [160, 71], [165, 72], [170, 73], [175, 74], [180, 75],
        [-175, 76], [-170, 77], [-165, 78], [-160, 79], [-155, 80],
        [-150, 81], [-145, 82], [-140, 83], [-135, 84], [-130, 85],
        [-125, 86], [-120, 87], [-115, 88], [-110, 89], [-105, 90],
        [-100, 91], [-95, 92], [-90, 93], [-85, 94], [-80, 95],
        [-75, 96], [-70, 97], [-65, 98], [-60, 99], [-55, 100],
        [-50, 101], [-45, 102], [-40, 103], [-35, 104], [-30, 105],
        [-25, 106], [-20, 107], [-15, 108], [-10, 109], [-5, 110],
        [0, 111], [5, 112], [10, 113], [15, 114], [20, 115],
        [25, 116], [30, 117], [35, 118], [40, 119], [45, 120],
        [50, 121], [55, 122], [60, 123], [65, 124], [70, 125],
        [75, 126], [80, 127], [85, 128], [90, 129], [95, 130],
        [100, 131], [105, 132], [110, 133], [115, 134], [120, 135],
        [125, 136], [130, 137], [135, 138], [140, 139], [145, 140],
        [150, 141], [155, 142], [160, 143], [165, 144], [170, 145],
        [175, 146], [180, 147], [-175, 148], [-170, 149], [-165, 150],
        [-160, 151], [-155, 152], [-150, 153], [-145, 154], [-140, 155],
        [-135, 156], [-130, 157], [-125, 158], [-120, 159], [-115, 160],
        [-110, 161], [-105, 162], [-100, 163], [-95, 164], [-90, 165],
        [-85, 166], [-80, 167], [-75, 168], [-70, 169], [-65, 170],
        [-60, 171], [-55, 172], [-50, 173], [-45, 174], [-40, 175],
        [-35, 176], [-30, 177], [-25, 178], [-20, 179], [-15, 180],
        [-10, 181], [-5, 182], [0, 183], [5, 184], [10, 185],
        [15, 186], [20, 187], [25, 188], [30, 189], [35, 190],
        [40, 191], [45, 192], [50, 193], [55, 194], [60, 195],
        [65, 196], [70, 197], [75, 198], [80, 199], [85, 200],
        [90, 201], [95, 202], [100, 203], [105, 204], [110, 205],
        [115, 206], [120, 207], [125, 208], [130, 209], [135, 210],
        [140, 211], [145, 212], [150, 213], [155, 214], [160, 215],
        [165, 216], [170, 217], [175, 218], [180, 219], [-175, 220],
        [-170, 221], [-165, 222], [-160, 223], [-155, 224], [-150, 225],
        [-145, 226], [-140, 227], [-135, 228], [-130, 229], [-125, 230],
        [-120, 231], [-115, 232], [-110, 233], [-105, 234], [-100, 235],
        [-95, 236], [-90, 237], [-85, 238], [-80, 239], [-75, 240],
        [-70, 241], [-65, 242], [-60, 243], [-55, 244], [-50, 245],
        [-45, 246], [-40, 247], [-35, 248], [-30, 249], [-25, 250],
        [-20, 251], [-15, 252], [-10, 253], [-5, 254], [0, 255],
        [5, 256], [10, 257], [15, 258], [20, 259], [25, 260],
        [30, 261], [35, 262], [40, 263], [45, 264], [50, 265],
        [55, 266], [60, 267], [65, 268], [70, 269], [75, 270],
        [80, 271], [85, 272], [90, 273], [95, 274], [100, 275],
        [105, 276], [110, 277], [115, 278], [120, 279], [125, 280],
        [130, 281], [135, 282], [140, 283], [145, 284], [150, 285],
        [155, 286], [160, 287], [165, 288], [170, 289], [175, 290],
        [180, 291], [-175, 292], [-170, 293], [-165, 294], [-160, 295],
        [-155, 296], [-150, 297], [-145, 298], [-140, 299], [-135, 300],
        [-130, 301], [-125, 302], [-120, 303], [-115, 304], [-110, 305],
        [-105, 306], [-100, 307], [-95, 308], [-90, 309], [-85, 310],
        [-80, 311], [-75, 312], [-70, 313], [-65, 314], [-60, 315],
        [-55, 316], [-50, 317], [-45, 318], [-40, 319], [-35, 320],
        [-30, 321], [-25, 322], [-20, 323], [-15, 324], [-10, 325],
        [-5, 326], [0, 327], [5, 328], [10, 329], [15, 330],
        [20, 331], [25, 332], [30, 333], [35, 334], [40, 335],
        [45, 336], [50, 337], [55, 338], [60, 339], [65, 340],
        [70, 341], [75, 342], [80, 343], [85, 344], [90, 345],
        [95, 346], [100, 347], [105, 348], [110, 349], [115, 350],
        [120, 351], [125, 352], [130, 353], [135, 354], [140, 355],
        [145, 356], [150, 357], [155, 358], [160, 359], [165, 360],
        [170, 361], [175, 362], [180, 363], [-175, 364], [-170, 365],
        [-165, 366], [-160, 367], [-155, 368], [-150, 369], [-145, 370],
        [-140, 371], [-135, 372], [-130, 373], [-125, 374], [-120, 375],
        [-115, 376], [-110, 377], [-105, 378], [-100, 379], [-95, 380],
        [-90, 381], [-85, 382], [-80, 383], [-75, 384], [-70, 385],
        [-65, 386], [-60, 387], [-55, 388], [-50, 389], [-45, 390],
        [-40, 391], [-35, 392], [-30, 393], [-25, 394], [-20, 395],
        [-15, 396], [-10, 397], [-5, 398], [0, 399], [5, 400],
        [10, 401], [15, 402], [20, 403], [25, 404], [30, 405],
        [35, 406], [40, 407], [45, 408], [50, 409], [55, 410],
        [60, 411], [65, 412], [70, 413], [75, 414], [80, 415],
        [85, 416], [90, 417], [95, 418], [100, 419], [105, 420],
        [110, 421], [115, 422], [120, 423], [125, 424], [130, 425],
        [135, 426], [140, 427], [145, 428], [150, 429], [155, 430],
        [160, 431], [165, 432], [170, 433], [175, 434], [180, 435]
      ]
    },
    // ── Asia ──
    {
      name: 'Asia',
      color: '#6a7a4a',
      points: [
        [40, 30], [45, 32], [50, 34], [55, 36], [60, 38],
        [65, 40], [70, 42], [75, 44], [80, 46], [85, 48],
        [90, 50], [95, 52], [100, 54], [105, 56], [110, 58],
        [115, 60], [120, 62], [125, 64], [130, 66], [135, 68],
        [140, 70], [145, 72], [150, 74], [155, 76], [160, 78],
        [165, 80], [170, 82], [175, 84], [180, 86], [-175, 88],
        [-170, 90], [-165, 92], [-160, 94], [-155, 96], [-150, 98],
        [-145, 100], [-140, 102], [-135, 104], [-130, 106], [-125, 108],
        [-120, 110], [-115, 112], [-110, 114], [-105, 116], [-100, 118],
        [-95, 120], [-90, 122], [-85, 124], [-80, 126], [-75, 128],
        [-70, 130], [-65, 132], [-60, 134], [-55, 136], [-50, 138],
        [-45, 140], [-40, 142], [-35, 144], [-30, 146], [-25, 148],
        [-20, 150], [-15, 152], [-10, 154], [-5, 156], [0, 158],
        [5, 160], [10, 162], [15, 164], [20, 166], [25, 168],
        [30, 170], [35, 172], [40, 174], [45, 176], [50, 178],
        [55, 180], [60, 182], [65, 184], [70, 186], [75, 188],
        [80, 190], [85, 192], [90, 194], [95, 196], [100, 198],
        [105, 200], [110, 202], [115, 204], [120, 206], [125, 208],
        [130, 210], [135, 212], [140, 214], [145, 216], [150, 218],
        [155, 220], [160, 222], [165, 224], [170, 226], [175, 228],
        [180, 230]
      ]
    },
    // ── Australia ──
    {
      name: 'Australia',
      color: '#8a7a4a',
      points: [
        [115, -10], [120, -12], [125, -14], [130, -16], [135, -18],
        [140, -20], [145, -22], [150, -24], [155, -26], [160, -28],
        [165, -30], [170, -32], [175, -34], [180, -36], [-175, -38],
        [-170, -40], [-165, -42], [-160, -44], [-155, -46], [-150, -48],
        [-145, -50], [-140, -52], [-135, -54], [-130, -56], [-125, -58],
        [-120, -60], [-115, -62], [-110, -64], [-105, -66], [-100, -68],
        [-95, -70], [-90, -72], [-85, -74], [-80, -76], [-75, -78],
        [-70, -80], [-65, -82], [-60, -84], [-55, -86], [-50, -88],
        [-45, -90], [-40, -92], [-35, -94], [-30, -96], [-25, -98],
        [-20, -100], [-15, -102], [-10, -104], [-5, -106], [0, -108],
        [5, -110], [10, -112], [15, -114], [20, -116], [25, -118],
        [30, -120], [35, -122], [40, -124], [45, -126], [50, -128],
        [55, -130], [60, -132], [65, -134], [70, -136], [75, -138],
        [80, -140], [85, -142], [90, -144], [95, -146], [100, -148],
        [105, -150], [110, -152], [115, -154], [120, -156], [125, -158],
        [130, -160], [135, -162], [140, -164], [145, -166], [150, -168],
        [155, -170], [160, -172], [165, -174], [170, -176], [175, -178],
        [180, -180]
      ]
    }
  ], []);

  const project = useCallback((lon, lat, radius) => {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = lon * Math.PI / 180;
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return { x, y, z };
  }, []);

  const drawContinent = useCallback((ctx, points, color, radius, rotY, cx, cy) => {
    if (points.length < 3) return;
    const rotRad = rotY * Math.PI / 180;
    const projected = points.map(([lon, lat]) => {
      const p = project(lon, lat, radius);
      const rx = p.x * Math.cos(rotRad) - p.z * Math.sin(rotRad);
      const rz = p.x * Math.sin(rotRad) + p.z * Math.cos(rotRad);
      return { x: rx, y: p.y, z: rz };
    });
    const visible = projected.filter(p => p.z > -radius * 0.15);
    if (visible.length < 3) return;
    const screenPts = visible.map(p => ({ x: cx + p.x, y: cy + p.y, z: p.z }));
    ctx.beginPath();
    screenPts.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    const avgZ = screenPts.reduce((s, p) => s + p.z, 0) / screenPts.length;
    const brightness = 0.45 + 0.55 * ((avgZ / radius + 1) / 2);
    const baseColor = color || '#5a8a4a';
    const r = parseInt(baseColor.slice(1, 2), 16) * 17 || 90;
    const g = parseInt(baseColor.slice(2, 3), 16) * 17 || 138;
    const b = parseInt(baseColor.slice(3, 4), 16) * 17 || 74;
    const br = Math.min(255, r * brightness * 0.9 + 20);
    const bg = Math.min(255, g * brightness * 0.9 + 20);
    const bb = Math.min(255, b * brightness * 0.9 + 20);
    ctx.fillStyle = `rgb(${br|0},${bg|0},${bb|0})`;
    ctx.fill();
    ctx.strokeStyle = `rgba(255,255,255,${0.04 + 0.06 * brightness})`;
    ctx.lineWidth = 0.6;
    ctx.stroke();
  }, [project]);

  const drawArcs = useCallback((ctx, radius, rotY, time, cx, cy) => {
    const pairs = [
      { from: [-100, 40], to: [0, 50] },
      { from: [-75, 35], to: [30, 45] },
      { from: [-120, 30], to: [20, 40] },
      { from: [-60, 20], to: [40, 30] },
      { from: [-80, 45], to: [60, 35] },
    ];
    const rotRad = rotY * Math.PI / 180;
    pairs.forEach((pair, idx) => {
      const p1 = project(pair.from[0], pair.from[1], radius);
      const p2 = project(pair.to[0], pair.to[1], radius);
      const r1x = p1.x * Math.cos(rotRad) - p1.z * Math.sin(rotRad);
      const r1z = p1.x * Math.sin(rotRad) + p1.z * Math.cos(rotRad);
      const r2x = p2.x * Math.cos(rotRad) - p2.z * Math.sin(rotRad);
      const r2z = p2.x * Math.sin(rotRad) + p2.z * Math.cos(rotRad);
      const p1s = { x: cx + r1x, y: cy + p1.y, z: r1z };
      const p2s = { x: cx + r2x, y: cy + p2.y, z: r2z };
      if (p1s.z < -radius * 0.2 && p2s.z < -radius * 0.2) return;
      const midX = (p1s.x + p2s.x) / 2;
      const midY = (p1s.y + p2s.y) / 2 - radius * 0.2;
      ctx.beginPath();
      ctx.moveTo(p1s.x, p1s.y);
      ctx.quadraticCurveTo(midX, midY, p2s.x, p2s.y);
      const alpha = 0.12 + 0.08 * Math.sin(time / 2500 + idx * 1.2);
      ctx.strokeStyle = `rgba(212,175,55,${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      const t = (Math.sin(time / 3000 + idx * 1.5) + 1) / 2;
      const dotX = (1 - t) * (1 - t) * p1s.x + 2 * (1 - t) * t * midX + t * t * p2s.x;
      const dotY = (1 - t) * (1 - t) * p1s.y + 2 * (1 - t) * t * midY + t * t * p2s.y;
      const grad = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 10);
      grad.addColorStop(0, `rgba(255,215,100,${0.6 + 0.3 * Math.sin(time / 2000 + idx)})`);
      grad.addColorStop(1, `rgba(255,215,100,0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [project]);

  const drawParticles = useCallback((ctx, radius, rotY, time, cx, cy) => {
    const count = 40;
    const rotRad = rotY * Math.PI / 180;
    for (let i = 0; i < count; i++) {
      const seed = i * 137.5;
      const lon = ((seed * 37 + time * 0.015) % 360) - 180;
      const lat = ((seed * 53 + time * 0.008) % 180) - 90;
      const p = project(lon, lat, radius * 0.97);
      const rx = p.x * Math.cos(rotRad) - p.z * Math.sin(rotRad);
      const rz = p.x * Math.sin(rotRad) + p.z * Math.cos(rotRad);
      if (rz < -radius * 0.1) continue;
      const sx = cx + rx;
      const sy = cy + p.y;
      const alpha = 0.2 + 0.4 * ((rz / radius + 1) / 2);
      const size = 1.2 + 1.8 * ((rz / radius + 1) / 2);
      ctx.beginPath();
      ctx.arc(sx, sy, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,175,55,${alpha * 0.25})`;
      ctx.fill();
      if (rz > radius * 0.15) {
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, size * 5);
        grad.addColorStop(0, `rgba(212,175,55,${alpha * 0.08})`);
        grad.addColorStop(1, `rgba(212,175,55,0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sx, sy, size * 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [project]);

  const drawAtmosphere = useCallback((ctx, radius, cx, cy) => {
    const grad = ctx.createRadialGradient(cx, cy, radius * 0.75, cx, cy, radius * 1.4);
    grad.addColorStop(0, `rgba(212,175,55,0)`);
    grad.addColorStop(0.4, `rgba(212,175,55,0.01)`);
    grad.addColorStop(0.7, `rgba(212,175,55,0.03)`);
    grad.addColorStop(1, `rgba(212,175,55,0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.4, 0, Math.PI * 2);
    ctx.fill();
    const grad2 = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.6);
    grad2.addColorStop(0, `rgba(80,150,255,0)`);
    grad2.addColorStop(0.5, `rgba(80,150,255,0.01)`);
    grad2.addColorStop(1, `rgba(80,150,255,0)`);
    ctx.fillStyle = grad2;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.6, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  // ── main render loop ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    if (!container) return;

    let w = container.clientWidth;
    let h = container.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      w = container.clientWidth;
      h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    let rotY = 0;
    let animationId = null;

    const render = (time) => {
      rotY += 0.06;
      const radius = Math.min(w, h) * 0.42;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.7);
      bgGrad.addColorStop(0, '#0a1628');
      bgGrad.addColorStop(1, '#020816');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      const oceanGrad = ctx.createRadialGradient(
        cx - radius * 0.2, cy - radius * 0.2, radius * 0.1,
        cx, cy, radius
      );
      oceanGrad.addColorStop(0, '#1a3a5c');
      oceanGrad.addColorStop(0.5, '#0f2844');
      oceanGrad.addColorStop(1, '#06152a');
      ctx.fillStyle = oceanGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      const shadeGrad = ctx.createRadialGradient(
        cx - radius * 0.3, cy - radius * 0.3, radius * 0.1,
        cx, cy, radius
      );
      shadeGrad.addColorStop(0, 'rgba(255,255,255,0.04)');
      shadeGrad.addColorStop(0.4, 'rgba(255,255,255,0.01)');
      shadeGrad.addColorStop(0.7, 'rgba(0,0,0,0.15)');
      shadeGrad.addColorStop(1, 'rgba(0,0,0,0.5)');
      ctx.fillStyle = shadeGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      continentData.forEach(cont => {
        drawContinent(ctx, cont.points, cont.color, radius, rotY, cx, cy);
      });

      drawArcs(ctx, radius, rotY, time, cx, cy);
      drawParticles(ctx, radius, rotY, time, cx, cy);
      drawAtmosphere(ctx, radius, cx, cy);

      const rimGrad = ctx.createRadialGradient(
        cx - radius * 0.4, cy - radius * 0.4, radius * 0.2,
        cx - radius * 0.4, cy - radius * 0.4, radius * 0.9
      );
      rimGrad.addColorStop(0, 'rgba(212,175,55,0.02)');
      rimGrad.addColorStop(1, 'rgba(212,175,55,0)');
      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(212,175,55,0.06)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [drawContinent, drawArcs, drawParticles, drawAtmosphere]);

  return (
    <div ref={containerRef} className={`globe-wrapper ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full rounded-full" />
    </div>
  );
};

// ── Hero component ──
const Hero = () => {
  const yearsCount = useCounter(19, 2000, 0, 200);
  const successCount = useCounter(94, 2000, 0, 400);
  const casesCount = useCounter(2000, 2000, 0, 600);
  const countriesCount = useCounter(50, 2000, 0, 800);

  const [hoveredCountry, setHoveredCountry] = useState(null);

  const countriesData = [
    { flag: '🇺🇸', name: 'United States', angle: 0 },
    { flag: '🇬🇧', name: 'United Kingdom', angle: 60 },
    { flag: '🇨🇦', name: 'Canada', angle: 120 },
    { flag: '🇦🇺', name: 'Australia', angle: 180 },
    { flag: '🇪🇺', name: 'Europe', angle: 240 },
    { flag: '🇳🇿', name: 'New Zealand', angle: 300 },
  ];

  const stats = [
    { value: yearsCount, label: 'Years Track Record', suffix: '+', icon: '🏆' },
    { value: successCount, label: 'Success Velocity', suffix: '%', icon: '📈' },
    { value: casesCount, label: 'Approved Portfolios', suffix: '+', icon: '✅' },
    { value: countriesCount, label: 'Global Accessways', suffix: '+', icon: '🌍' },
  ];

  return (
    <section className="relative min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#020916]">
      {/* ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none bg-gradient-to-br from-[#D4AF37] to-transparent mix-blend-screen animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 pointer-events-none bg-gradient-to-tr from-[#1a2b4c] via-[#2a3b5c] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.012)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 400%22%3E%3Cpath d=%22M100,200 Q150,180 200,200 T300,180 T400,200 T500,180 T600,200 T700,180 L800,200 L800,300 L0,300 Z%22 fill=%22none%22 stroke=%22%23D4AF37%22 stroke-width=%221%22/%3E%3C/svg%3E')] bg-cover bg-center" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* left column */}
        <div className="text-left w-full lg:col-span-7 z-20">
          {/* badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#04152d]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(214,175,55,0.06)] animate-fadeInUp">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-gray-200 uppercase tracking-[0.15em]">
              Trusted Since 2006 • Visa & Immigration Excellence
            </span>
          </div>

          {/* headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-6 text-white tracking-tight animate-fadeInUp-delay">
            Visa, Immigration <br className="hidden sm:inline" />
            <span className="relative mt-1 inline-block bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-[length:200%_auto] bg-clip-text text-transparent animate-textShimmer font-black">
              & Study Abroad
            </span>
            <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-2 tracking-wide">
              Experts.
            </span>
          </h1>

          {/* description */}
          <div className="mb-8 max-w-xl">
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
              Empowering students, ambitious professionals, and families to transcend borders through impeccably tailored consultancy, corporate relocation, and international academic access paths.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="inline-flex items-center gap-2 text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1.5 rounded-full border border-[#D4AF37]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Student Visas
              </span>
              <span className="inline-flex items-center gap-2 text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1.5 rounded-full border border-[#D4AF37]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Work Permits
              </span>
              <span className="inline-flex items-center gap-2 text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1.5 rounded-full border border-[#D4AF37]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Corporate Relocation
              </span>
              <span className="inline-flex items-center gap-2 text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1.5 rounded-full border border-[#D4AF37]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Study Abroad
              </span>
            </div>
          </div>

          {/* dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <a href="#consultation" className="cta-primary group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-950 font-bold text-sm rounded-md shadow-[0_4px_30px_rgba(214,175,55,0.25)] hover:shadow-[0_4px_50px_rgba(214,175,55,0.5)] hover:-translate-y-0.5 transition-all duration-300 no-underline tracking-wide uppercase z-10">
              <span>Schedule a Confidential Session</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#services" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#D4AF37]/40 text-[#D4AF37] font-medium text-sm rounded-md hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:-translate-y-0.5 transition-all duration-300 no-underline tracking-wide">
              <span>Explore Our Services</span>
              <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-white/5 pt-8">
            {stats.map((stat, i) => (
              <div key={i} className="metric-card p-3 sm:p-4 rounded-xl border border-white/[0.03] bg-gradient-to-br from-white/[0.02] to-transparent hover:bg-white/[0.05] hover:border-[#D4AF37]/25 transition-all duration-300 cursor-default">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm">{stat.icon}</span>
                  <span className="metric-number text-2xl sm:text-3xl font-black bg-gradient-to-r from-white to-gray-300 transition-colors duration-300">
                    {stat.value}{stat.suffix}
                  </span>
                </div>
                <div className="metric-label text-gray-500 text-[9px] sm:text-[10px] font-bold tracking-[0.12em] uppercase transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right column – globe */}
        <div className="hidden lg:flex w-full lg:col-span-5 items-center justify-center relative py-6">
          <div className="relative w-[480px] h-[480px] xl:w-[540px] xl:h-[540px] flex items-center justify-center group/globe animate-fadeIn">
            <div className="absolute inset-6 rounded-full bg-[#D4AF37]/5 blur-3xl opacity-40 pointer-events-none group-hover/globe:opacity-70 transition-opacity duration-1000" />
            <div className="absolute w-[96%] h-[96%] rounded-full border border-[#D4AF37]/12 pointer-events-none orbit-ring-1 shadow-[inset_0_0_60px_rgba(214,175,55,0.02)]" />
            <div className="absolute w-[76%] h-[76%] rounded-full border border-dashed border-white/8 pointer-events-none orbit-ring-2" />
            <div className="absolute w-[56%] h-[56%] rounded-full border border-white/4 pointer-events-none" />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.08),inset_0_0_50px_rgba(0,0,0,0.9)] border border-[#D4AF37]/25 backdrop-blur-xl z-10 group-hover/globe:border-[#D4AF37]/50 transition-colors duration-700">
              <GlobeCanvas className="w-full h-full" />
              <div className="absolute inset-0 rounded-full shadow-[inset_-30px_-30px_70px_rgba(0,0,0,0.95),inset_15px_15px_40px_rgba(212,175,55,0.08)] pointer-events-none" />
            </div>

            {/* orbiting flags */}
            {countriesData.map((country, index) => {
              const orbitStyles = {
                '--start-angle': `${country.angle}deg`,
                '--end-angle': `${country.angle + 360}deg`,
              };
              return (
                <div key={index} className="absolute left-[50%] top-[50%] -ml-9 -mt-9 z-20 animate-orbit" style={orbitStyles}>
                  <div
                    className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white/10 bg-[#030f20]/90 text-2xl sm:text-3xl shadow-2xl hover:scale-110 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-pointer backdrop-blur-md select-none animate-counter-rotate"
                    onMouseEnter={() => setHoveredCountry(index)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    <span className="drop-shadow-md transform scale-105">{country.flag}</span>
                    {hoveredCountry === index && (
                      <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-[#061833] text-white border border-[#D4AF37]/40 font-bold text-[10px] sm:text-[11px] py-1.5 px-3 rounded shadow-[0_4px_24px_rgba(0,0,0,0.7)] pointer-events-none tracking-wider z-50 uppercase whitespace-nowrap animate-fadeInUp tooltip-arrow">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          {country.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Inline styles for animations (copy from your HTML) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes orbitSmooth {
          from { transform: rotate(var(--start-angle)) translateX(215px) rotate(calc(-1 * var(--start-angle))); }
          to { transform: rotate(var(--end-angle)) translateX(215px) rotate(calc(-1 * var(--end-angle))); }
        }
        @keyframes counterRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.08); }
        }
        @keyframes orbitRing1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitRing2 {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }
        .animate-fadeInUp-delay { animation: fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s forwards; opacity: 0; }
        .animate-fadeIn { animation: fadeIn 1.4s cubic-bezier(0.16,1,0.3,1) forwards; }
        .animate-textShimmer { animation: textShimmer 5s ease-in-out infinite; background-size: 200% auto; }
        .animate-pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }
        .animate-orbit { animation: orbitSmooth 45s linear infinite; }
        .animate-counter-rotate { animation: counterRotate 45s linear infinite; }
        .orbit-ring-1 { animation: orbitRing1 80s linear infinite; }
        .orbit-ring-2 { animation: orbitRing2 50s linear infinite; }
        .globe-wrapper { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .globe-wrapper canvas { display: block; width: 100% !important; height: 100% !important; border-radius: 50%; box-shadow: 0 0 80px rgba(212,175,55,0.06), inset 0 0 60px rgba(0,0,0,0.8); }
        .metric-card { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
        .metric-card:hover .metric-number { background: linear-gradient(135deg, #D4AF37, #F3E5AB); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .metric-card:hover .metric-label { color: #b0a8a0; }
        .metric-number { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); -webkit-text-fill-color: white; }
        .cta-primary { position: relative; overflow: hidden; }
        .cta-primary::before { content: ''; position: absolute; inset: -2px; border-radius: 6px; background: linear-gradient(135deg, #D4AF37, #F3E5AB, #D4AF37); background-size: 300% 300%; animation: shimmerBorder 3s ease-in-out infinite; z-index: -1; opacity: 0; transition: opacity 0.4s ease; }
        .cta-primary:hover::before { opacity: 1; }
        @keyframes shimmerBorder { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .tooltip-arrow::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 6px solid transparent; border-top-color: #061833; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp, .animate-fadeInUp-delay, .animate-fadeIn, .animate-textShimmer, .animate-pulse-glow, .animate-orbit, .animate-counter-rotate, .orbit-ring-1, .orbit-ring-2 { animation: none !important; transition: none !important; opacity: 1 !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
