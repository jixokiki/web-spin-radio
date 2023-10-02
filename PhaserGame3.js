import React, { useEffect } from 'react';
import Phaser from 'phaser';

function PhaserGame3() {
  let isDragging = false;
  let lineStartPosition = { x: 0, y: 0 };
  let currentPath = [];
  let currentColor;

  let line;
  let pathGraphics;

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-example',
      width: 400,
      height: 200,
      scene: {
        create,
        update: () => {}, // Tidak ada perubahan update dalam contoh ini
      },
    };

    const game = new Phaser.Game(config);

    function create() {
      // ... (sisa kode create() tetap sama)
        let cicles = []
        for(let rowIdx = 0; rowIdx < 4; rowIdx++ ){
            for(let colIdx = 0; colIdx < 2; colIdx++ ){
                let circle = this.add.circle(50 + 100 * rowIdx, 50 + 100 * colIdx, 25,  0x6666ff).setOrigin(.5);
                // Just to test a different color
                if(rowIdx + colIdx ==2){
                  circle.fillColor = 0xff0000;
                }
                circle.setInteractive();
                cicles.push(circle);
            }        
        }
    
        line = this.add.line(0,0, 0,0, 100, 100,  0xffffff).setOrigin(0);
        line.setLineWidth(5);
        line.visible = false;
        
        pathGraphics = this.add.graphics();
        
        // adding the events to the scene
        this.input.on('pointerdown', dragStart);
        this.input.on('pointerup', dragEnd);
        this.input.on('pointermove', drag);
    }

    function dragStart(pointer, gameObjects){
        if(gameObjects.length == 0){
          return;
        }
        isDragging = true;
        
        // remember Starting Color
        currentColor = gameObjects[0].fillColor;
        
        // initialize Path
        currentPath = [gameObjects[0]];
    
        // draw/save last segment of the path
        lineStartPosition.x = gameObjects[0].x;
        lineStartPosition.y = gameObjects[0].y;
        
        line.x = gameObjects[0].x;
        line.y = gameObjects[0].y;
        line.setTo(0, 0, 0, 0);
        line.visible = true;
    }
    
    function drag(pointer, gameObjects ){
        if(isDragging == true){
            // Check If Circle is allowed to be added, to path
            // Here you would also check if the line is horizontal or vertical  (this part is currently not implemented)
            if(gameObjects[0] && currentPath.indexOf(gameObjects[0]) === -1 && currentColor == gameObjects[0].fillColor){
              currentPath.push(gameObjects[0]);
              
              line.x = gameObjects[0].x;
              line.y = gameObjects[0].y;
              
              lineStartPosition.x = gameObjects[0].x;
              lineStartPosition.y = gameObjects[0].y;
    
            }
            line.setTo(0, 0, pointer.x - lineStartPosition.x, pointer.y - lineStartPosition.y);
            drawPath();
        }
    }
    
    function drawPath(){
        pathGraphics.clear();
        if(currentPath.length > 0){
          pathGraphics.lineStyle(10, 0xffffff);
          let path = new Phaser.Curves.Path(currentPath[0].x, currentPath[0].y);
          for(let idx = 1; idx < currentPath.length; idx++){
            let point = currentPath[idx];
            path.lineTo(point.x, point.y);
          }
          path.draw(pathGraphics);
        }
    }
    
    function dragEnd(pointer, gameObjects){
        if(gameObjects.length == 0){
          return;
        }
        
        if(currentPath.length < 2) {
          console.info('No valid path');
          return;
        } else { 
          console.info(`Valid Union path, length: ${currentPath.length}`);
        }
    
        line.visible = false;
        isDragging = false;
    }

    function componentWillUnmount() {
      // Membersihkan sumber daya permainan saat komponen dihapus
      game.destroy(true);
    }

    // Inisialisasi Phaser saat komponen dimuat
    return () => {
      componentWillUnmount();
    };
  }, []);

  // ... (sisa kode komponen, termasuk fungsi-fungsi dragStart, drag, dan lainnya)

  return <div id="phaser-example" />;
}

export default PhaserGame3;
