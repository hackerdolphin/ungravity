// 자동 생성된 코드입니다. 편집하지 마십시오.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tristate_01":
            case "수준1":return tiles.createTilemap(hex`100010000909090909090903030303030303030206060606060605050505050505050504060606060606050605050505050505040707070706090909090505050505050407070707070606060505050505050504060607070606050505050505050505040607060606060601010101050505050406070706060906060601010105050504060707060606060606060101010505040808070707070707070701010105050406080606060706060601010101050504060806060606010101010101010105040806060601010101010101010101050406060a0a0a0a0a0a0a0a0a0a0a0a0a040a0a0a0a0a0a0a0a0a0a0a0a0a0a0a040a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 자동 생성된 코드입니다. 편집하지 마십시오.
