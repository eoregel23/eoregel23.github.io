/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2962.0, "minX": 0.0, "maxY": 7962.0, "series": [{"data": [[0.0, 2962.0], [0.1, 2962.0], [0.2, 2962.0], [0.3, 2962.0], [0.4, 2962.0], [0.5, 2962.0], [0.6, 2962.0], [0.7, 2962.0], [0.8, 2962.0], [0.9, 2962.0], [1.0, 2984.0], [1.1, 2984.0], [1.2, 2984.0], [1.3, 2984.0], [1.4, 2984.0], [1.5, 2984.0], [1.6, 2984.0], [1.7, 2984.0], [1.8, 2984.0], [1.9, 2984.0], [2.0, 3093.0], [2.1, 3093.0], [2.2, 3093.0], [2.3, 3093.0], [2.4, 3093.0], [2.5, 3093.0], [2.6, 3093.0], [2.7, 3093.0], [2.8, 3093.0], [2.9, 3093.0], [3.0, 3304.0], [3.1, 3304.0], [3.2, 3304.0], [3.3, 3304.0], [3.4, 3304.0], [3.5, 3304.0], [3.6, 3304.0], [3.7, 3304.0], [3.8, 3304.0], [3.9, 3304.0], [4.0, 3323.0], [4.1, 3323.0], [4.2, 3323.0], [4.3, 3323.0], [4.4, 3323.0], [4.5, 3323.0], [4.6, 3323.0], [4.7, 3323.0], [4.8, 3323.0], [4.9, 3323.0], [5.0, 3450.0], [5.1, 3450.0], [5.2, 3450.0], [5.3, 3450.0], [5.4, 3450.0], [5.5, 3450.0], [5.6, 3450.0], [5.7, 3450.0], [5.8, 3450.0], [5.9, 3450.0], [6.0, 3483.0], [6.1, 3483.0], [6.2, 3483.0], [6.3, 3483.0], [6.4, 3483.0], [6.5, 3483.0], [6.6, 3483.0], [6.7, 3483.0], [6.8, 3483.0], [6.9, 3483.0], [7.0, 3563.0], [7.1, 3563.0], [7.2, 3563.0], [7.3, 3563.0], [7.4, 3563.0], [7.5, 3563.0], [7.6, 3563.0], [7.7, 3563.0], [7.8, 3563.0], [7.9, 3563.0], [8.0, 3624.0], [8.1, 3624.0], [8.2, 3624.0], [8.3, 3624.0], [8.4, 3624.0], [8.5, 3624.0], [8.6, 3624.0], [8.7, 3624.0], [8.8, 3624.0], [8.9, 3624.0], [9.0, 3638.0], [9.1, 3638.0], [9.2, 3638.0], [9.3, 3638.0], [9.4, 3638.0], [9.5, 3638.0], [9.6, 3638.0], [9.7, 3638.0], [9.8, 3638.0], [9.9, 3638.0], [10.0, 3714.0], [10.1, 3714.0], [10.2, 3714.0], [10.3, 3714.0], [10.4, 3714.0], [10.5, 3714.0], [10.6, 3714.0], [10.7, 3714.0], [10.8, 3714.0], [10.9, 3714.0], [11.0, 3732.0], [11.1, 3732.0], [11.2, 3732.0], [11.3, 3732.0], [11.4, 3732.0], [11.5, 3732.0], [11.6, 3732.0], [11.7, 3732.0], [11.8, 3732.0], [11.9, 3732.0], [12.0, 3742.0], [12.1, 3742.0], [12.2, 3742.0], [12.3, 3742.0], [12.4, 3742.0], [12.5, 3742.0], [12.6, 3742.0], [12.7, 3742.0], [12.8, 3742.0], [12.9, 3742.0], [13.0, 3810.0], [13.1, 3810.0], [13.2, 3810.0], [13.3, 3810.0], [13.4, 3810.0], [13.5, 3810.0], [13.6, 3810.0], [13.7, 3810.0], [13.8, 3810.0], [13.9, 3810.0], [14.0, 3841.0], [14.1, 3841.0], [14.2, 3841.0], [14.3, 3841.0], [14.4, 3841.0], [14.5, 3841.0], [14.6, 3841.0], [14.7, 3841.0], [14.8, 3841.0], [14.9, 3841.0], [15.0, 3855.0], [15.1, 3855.0], [15.2, 3855.0], [15.3, 3855.0], [15.4, 3855.0], [15.5, 3855.0], [15.6, 3855.0], [15.7, 3855.0], [15.8, 3855.0], [15.9, 3855.0], [16.0, 3855.0], [16.1, 3855.0], [16.2, 3855.0], [16.3, 3855.0], [16.4, 3855.0], [16.5, 3855.0], [16.6, 3855.0], [16.7, 3855.0], [16.8, 3855.0], [16.9, 3855.0], [17.0, 3865.0], [17.1, 3865.0], [17.2, 3865.0], [17.3, 3865.0], [17.4, 3865.0], [17.5, 3865.0], [17.6, 3865.0], [17.7, 3865.0], [17.8, 3865.0], [17.9, 3865.0], [18.0, 3898.0], [18.1, 3898.0], [18.2, 3898.0], [18.3, 3898.0], [18.4, 3898.0], [18.5, 3898.0], [18.6, 3898.0], [18.7, 3898.0], [18.8, 3898.0], [18.9, 3898.0], [19.0, 3964.0], [19.1, 3964.0], [19.2, 3964.0], [19.3, 3964.0], [19.4, 3964.0], [19.5, 3964.0], [19.6, 3964.0], [19.7, 3964.0], [19.8, 3964.0], [19.9, 3964.0], [20.0, 4187.0], [20.1, 4187.0], [20.2, 4187.0], [20.3, 4187.0], [20.4, 4187.0], [20.5, 4187.0], [20.6, 4187.0], [20.7, 4187.0], [20.8, 4187.0], [20.9, 4187.0], [21.0, 4211.0], [21.1, 4211.0], [21.2, 4211.0], [21.3, 4211.0], [21.4, 4211.0], [21.5, 4211.0], [21.6, 4211.0], [21.7, 4211.0], [21.8, 4211.0], [21.9, 4211.0], [22.0, 4265.0], [22.1, 4265.0], [22.2, 4265.0], [22.3, 4265.0], [22.4, 4265.0], [22.5, 4265.0], [22.6, 4265.0], [22.7, 4265.0], [22.8, 4265.0], [22.9, 4265.0], [23.0, 4279.0], [23.1, 4279.0], [23.2, 4279.0], [23.3, 4279.0], [23.4, 4279.0], [23.5, 4279.0], [23.6, 4279.0], [23.7, 4279.0], [23.8, 4279.0], [23.9, 4279.0], [24.0, 4289.0], [24.1, 4289.0], [24.2, 4289.0], [24.3, 4289.0], [24.4, 4289.0], [24.5, 4289.0], [24.6, 4289.0], [24.7, 4289.0], [24.8, 4289.0], [24.9, 4289.0], [25.0, 4314.0], [25.1, 4314.0], [25.2, 4314.0], [25.3, 4314.0], [25.4, 4314.0], [25.5, 4314.0], [25.6, 4314.0], [25.7, 4314.0], [25.8, 4314.0], [25.9, 4314.0], [26.0, 4367.0], [26.1, 4367.0], [26.2, 4367.0], [26.3, 4367.0], [26.4, 4367.0], [26.5, 4367.0], [26.6, 4367.0], [26.7, 4367.0], [26.8, 4367.0], [26.9, 4367.0], [27.0, 4370.0], [27.1, 4370.0], [27.2, 4370.0], [27.3, 4370.0], [27.4, 4370.0], [27.5, 4370.0], [27.6, 4370.0], [27.7, 4370.0], [27.8, 4370.0], [27.9, 4370.0], [28.0, 4374.0], [28.1, 4374.0], [28.2, 4374.0], [28.3, 4374.0], [28.4, 4374.0], [28.5, 4374.0], [28.6, 4374.0], [28.7, 4374.0], [28.8, 4374.0], [28.9, 4374.0], [29.0, 4384.0], [29.1, 4384.0], [29.2, 4384.0], [29.3, 4384.0], [29.4, 4384.0], [29.5, 4384.0], [29.6, 4384.0], [29.7, 4384.0], [29.8, 4384.0], [29.9, 4384.0], [30.0, 4466.0], [30.1, 4466.0], [30.2, 4466.0], [30.3, 4466.0], [30.4, 4466.0], [30.5, 4466.0], [30.6, 4466.0], [30.7, 4466.0], [30.8, 4466.0], [30.9, 4466.0], [31.0, 4503.0], [31.1, 4503.0], [31.2, 4503.0], [31.3, 4503.0], [31.4, 4503.0], [31.5, 4503.0], [31.6, 4503.0], [31.7, 4503.0], [31.8, 4503.0], [31.9, 4503.0], [32.0, 4577.0], [32.1, 4577.0], [32.2, 4577.0], [32.3, 4577.0], [32.4, 4577.0], [32.5, 4577.0], [32.6, 4577.0], [32.7, 4577.0], [32.8, 4577.0], [32.9, 4577.0], [33.0, 4578.0], [33.1, 4578.0], [33.2, 4578.0], [33.3, 4578.0], [33.4, 4578.0], [33.5, 4578.0], [33.6, 4578.0], [33.7, 4578.0], [33.8, 4578.0], [33.9, 4578.0], [34.0, 4595.0], [34.1, 4595.0], [34.2, 4595.0], [34.3, 4595.0], [34.4, 4595.0], [34.5, 4595.0], [34.6, 4595.0], [34.7, 4595.0], [34.8, 4595.0], [34.9, 4595.0], [35.0, 4671.0], [35.1, 4671.0], [35.2, 4671.0], [35.3, 4671.0], [35.4, 4671.0], [35.5, 4671.0], [35.6, 4671.0], [35.7, 4671.0], [35.8, 4671.0], [35.9, 4671.0], [36.0, 4705.0], [36.1, 4705.0], [36.2, 4705.0], [36.3, 4705.0], [36.4, 4705.0], [36.5, 4705.0], [36.6, 4705.0], [36.7, 4705.0], [36.8, 4705.0], [36.9, 4705.0], [37.0, 4756.0], [37.1, 4756.0], [37.2, 4756.0], [37.3, 4756.0], [37.4, 4756.0], [37.5, 4756.0], [37.6, 4756.0], [37.7, 4756.0], [37.8, 4756.0], [37.9, 4756.0], [38.0, 4799.0], [38.1, 4799.0], [38.2, 4799.0], [38.3, 4799.0], [38.4, 4799.0], [38.5, 4799.0], [38.6, 4799.0], [38.7, 4799.0], [38.8, 4799.0], [38.9, 4799.0], [39.0, 4831.0], [39.1, 4831.0], [39.2, 4831.0], [39.3, 4831.0], [39.4, 4831.0], [39.5, 4831.0], [39.6, 4831.0], [39.7, 4831.0], [39.8, 4831.0], [39.9, 4831.0], [40.0, 4893.0], [40.1, 4893.0], [40.2, 4893.0], [40.3, 4893.0], [40.4, 4893.0], [40.5, 4893.0], [40.6, 4893.0], [40.7, 4893.0], [40.8, 4893.0], [40.9, 4893.0], [41.0, 4920.0], [41.1, 4920.0], [41.2, 4920.0], [41.3, 4920.0], [41.4, 4920.0], [41.5, 4920.0], [41.6, 4920.0], [41.7, 4920.0], [41.8, 4920.0], [41.9, 4920.0], [42.0, 4922.0], [42.1, 4922.0], [42.2, 4922.0], [42.3, 4922.0], [42.4, 4922.0], [42.5, 4922.0], [42.6, 4922.0], [42.7, 4922.0], [42.8, 4922.0], [42.9, 4922.0], [43.0, 4964.0], [43.1, 4964.0], [43.2, 4964.0], [43.3, 4964.0], [43.4, 4964.0], [43.5, 4964.0], [43.6, 4964.0], [43.7, 4964.0], [43.8, 4964.0], [43.9, 4964.0], [44.0, 4975.0], [44.1, 4975.0], [44.2, 4975.0], [44.3, 4975.0], [44.4, 4975.0], [44.5, 4975.0], [44.6, 4975.0], [44.7, 4975.0], [44.8, 4975.0], [44.9, 4975.0], [45.0, 4994.0], [45.1, 4994.0], [45.2, 4994.0], [45.3, 4994.0], [45.4, 4994.0], [45.5, 4994.0], [45.6, 4994.0], [45.7, 4994.0], [45.8, 4994.0], [45.9, 4994.0], [46.0, 5000.0], [46.1, 5000.0], [46.2, 5000.0], [46.3, 5000.0], [46.4, 5000.0], [46.5, 5000.0], [46.6, 5000.0], [46.7, 5000.0], [46.8, 5000.0], [46.9, 5000.0], [47.0, 5043.0], [47.1, 5043.0], [47.2, 5043.0], [47.3, 5043.0], [47.4, 5043.0], [47.5, 5043.0], [47.6, 5043.0], [47.7, 5043.0], [47.8, 5043.0], [47.9, 5043.0], [48.0, 5091.0], [48.1, 5091.0], [48.2, 5091.0], [48.3, 5091.0], [48.4, 5091.0], [48.5, 5091.0], [48.6, 5091.0], [48.7, 5091.0], [48.8, 5091.0], [48.9, 5091.0], [49.0, 5142.0], [49.1, 5142.0], [49.2, 5142.0], [49.3, 5142.0], [49.4, 5142.0], [49.5, 5142.0], [49.6, 5142.0], [49.7, 5142.0], [49.8, 5142.0], [49.9, 5142.0], [50.0, 5149.0], [50.1, 5149.0], [50.2, 5149.0], [50.3, 5149.0], [50.4, 5149.0], [50.5, 5149.0], [50.6, 5149.0], [50.7, 5149.0], [50.8, 5149.0], [50.9, 5149.0], [51.0, 5208.0], [51.1, 5208.0], [51.2, 5208.0], [51.3, 5208.0], [51.4, 5208.0], [51.5, 5208.0], [51.6, 5208.0], [51.7, 5208.0], [51.8, 5208.0], [51.9, 5208.0], [52.0, 5227.0], [52.1, 5227.0], [52.2, 5227.0], [52.3, 5227.0], [52.4, 5227.0], [52.5, 5227.0], [52.6, 5227.0], [52.7, 5227.0], [52.8, 5227.0], [52.9, 5227.0], [53.0, 5334.0], [53.1, 5334.0], [53.2, 5334.0], [53.3, 5334.0], [53.4, 5334.0], [53.5, 5334.0], [53.6, 5334.0], [53.7, 5334.0], [53.8, 5334.0], [53.9, 5334.0], [54.0, 5363.0], [54.1, 5363.0], [54.2, 5363.0], [54.3, 5363.0], [54.4, 5363.0], [54.5, 5363.0], [54.6, 5363.0], [54.7, 5363.0], [54.8, 5363.0], [54.9, 5363.0], [55.0, 5542.0], [55.1, 5542.0], [55.2, 5542.0], [55.3, 5542.0], [55.4, 5542.0], [55.5, 5542.0], [55.6, 5542.0], [55.7, 5542.0], [55.8, 5542.0], [55.9, 5542.0], [56.0, 5619.0], [56.1, 5619.0], [56.2, 5619.0], [56.3, 5619.0], [56.4, 5619.0], [56.5, 5619.0], [56.6, 5619.0], [56.7, 5619.0], [56.8, 5619.0], [56.9, 5619.0], [57.0, 5635.0], [57.1, 5635.0], [57.2, 5635.0], [57.3, 5635.0], [57.4, 5635.0], [57.5, 5635.0], [57.6, 5635.0], [57.7, 5635.0], [57.8, 5635.0], [57.9, 5635.0], [58.0, 5771.0], [58.1, 5771.0], [58.2, 5771.0], [58.3, 5771.0], [58.4, 5771.0], [58.5, 5771.0], [58.6, 5771.0], [58.7, 5771.0], [58.8, 5771.0], [58.9, 5771.0], [59.0, 5804.0], [59.1, 5804.0], [59.2, 5804.0], [59.3, 5804.0], [59.4, 5804.0], [59.5, 5804.0], [59.6, 5804.0], [59.7, 5804.0], [59.8, 5804.0], [59.9, 5804.0], [60.0, 6109.0], [60.1, 6109.0], [60.2, 6109.0], [60.3, 6109.0], [60.4, 6109.0], [60.5, 6109.0], [60.6, 6109.0], [60.7, 6109.0], [60.8, 6109.0], [60.9, 6109.0], [61.0, 6201.0], [61.1, 6201.0], [61.2, 6201.0], [61.3, 6201.0], [61.4, 6201.0], [61.5, 6201.0], [61.6, 6201.0], [61.7, 6201.0], [61.8, 6201.0], [61.9, 6201.0], [62.0, 6259.0], [62.1, 6259.0], [62.2, 6259.0], [62.3, 6259.0], [62.4, 6259.0], [62.5, 6259.0], [62.6, 6259.0], [62.7, 6259.0], [62.8, 6259.0], [62.9, 6259.0], [63.0, 6279.0], [63.1, 6279.0], [63.2, 6279.0], [63.3, 6279.0], [63.4, 6279.0], [63.5, 6279.0], [63.6, 6279.0], [63.7, 6279.0], [63.8, 6279.0], [63.9, 6279.0], [64.0, 6373.0], [64.1, 6373.0], [64.2, 6373.0], [64.3, 6373.0], [64.4, 6373.0], [64.5, 6373.0], [64.6, 6373.0], [64.7, 6373.0], [64.8, 6373.0], [64.9, 6373.0], [65.0, 6529.0], [65.1, 6529.0], [65.2, 6529.0], [65.3, 6529.0], [65.4, 6529.0], [65.5, 6529.0], [65.6, 6529.0], [65.7, 6529.0], [65.8, 6529.0], [65.9, 6529.0], [66.0, 6552.0], [66.1, 6552.0], [66.2, 6552.0], [66.3, 6552.0], [66.4, 6552.0], [66.5, 6552.0], [66.6, 6552.0], [66.7, 6552.0], [66.8, 6552.0], [66.9, 6552.0], [67.0, 6591.0], [67.1, 6591.0], [67.2, 6591.0], [67.3, 6591.0], [67.4, 6591.0], [67.5, 6591.0], [67.6, 6591.0], [67.7, 6591.0], [67.8, 6591.0], [67.9, 6591.0], [68.0, 6672.0], [68.1, 6672.0], [68.2, 6672.0], [68.3, 6672.0], [68.4, 6672.0], [68.5, 6672.0], [68.6, 6672.0], [68.7, 6672.0], [68.8, 6672.0], [68.9, 6672.0], [69.0, 6740.0], [69.1, 6740.0], [69.2, 6740.0], [69.3, 6740.0], [69.4, 6740.0], [69.5, 6740.0], [69.6, 6740.0], [69.7, 6740.0], [69.8, 6740.0], [69.9, 6740.0], [70.0, 6752.0], [70.1, 6752.0], [70.2, 6752.0], [70.3, 6752.0], [70.4, 6752.0], [70.5, 6752.0], [70.6, 6752.0], [70.7, 6752.0], [70.8, 6752.0], [70.9, 6752.0], [71.0, 6809.0], [71.1, 6809.0], [71.2, 6809.0], [71.3, 6809.0], [71.4, 6809.0], [71.5, 6809.0], [71.6, 6809.0], [71.7, 6809.0], [71.8, 6809.0], [71.9, 6809.0], [72.0, 6831.0], [72.1, 6831.0], [72.2, 6831.0], [72.3, 6831.0], [72.4, 6831.0], [72.5, 6831.0], [72.6, 6831.0], [72.7, 6831.0], [72.8, 6831.0], [72.9, 6831.0], [73.0, 6898.0], [73.1, 6898.0], [73.2, 6898.0], [73.3, 6898.0], [73.4, 6898.0], [73.5, 6898.0], [73.6, 6898.0], [73.7, 6898.0], [73.8, 6898.0], [73.9, 6898.0], [74.0, 6931.0], [74.1, 6931.0], [74.2, 6931.0], [74.3, 6931.0], [74.4, 6931.0], [74.5, 6931.0], [74.6, 6931.0], [74.7, 6931.0], [74.8, 6931.0], [74.9, 6931.0], [75.0, 6998.0], [75.1, 6998.0], [75.2, 6998.0], [75.3, 6998.0], [75.4, 6998.0], [75.5, 6998.0], [75.6, 6998.0], [75.7, 6998.0], [75.8, 6998.0], [75.9, 6998.0], [76.0, 7048.0], [76.1, 7048.0], [76.2, 7048.0], [76.3, 7048.0], [76.4, 7048.0], [76.5, 7048.0], [76.6, 7048.0], [76.7, 7048.0], [76.8, 7048.0], [76.9, 7048.0], [77.0, 7060.0], [77.1, 7060.0], [77.2, 7060.0], [77.3, 7060.0], [77.4, 7060.0], [77.5, 7060.0], [77.6, 7060.0], [77.7, 7060.0], [77.8, 7060.0], [77.9, 7060.0], [78.0, 7120.0], [78.1, 7120.0], [78.2, 7120.0], [78.3, 7120.0], [78.4, 7120.0], [78.5, 7120.0], [78.6, 7120.0], [78.7, 7120.0], [78.8, 7120.0], [78.9, 7120.0], [79.0, 7162.0], [79.1, 7162.0], [79.2, 7162.0], [79.3, 7162.0], [79.4, 7162.0], [79.5, 7162.0], [79.6, 7162.0], [79.7, 7162.0], [79.8, 7162.0], [79.9, 7162.0], [80.0, 7190.0], [80.1, 7190.0], [80.2, 7190.0], [80.3, 7190.0], [80.4, 7190.0], [80.5, 7190.0], [80.6, 7190.0], [80.7, 7190.0], [80.8, 7190.0], [80.9, 7190.0], [81.0, 7245.0], [81.1, 7245.0], [81.2, 7245.0], [81.3, 7245.0], [81.4, 7245.0], [81.5, 7245.0], [81.6, 7245.0], [81.7, 7245.0], [81.8, 7245.0], [81.9, 7245.0], [82.0, 7272.0], [82.1, 7272.0], [82.2, 7272.0], [82.3, 7272.0], [82.4, 7272.0], [82.5, 7272.0], [82.6, 7272.0], [82.7, 7272.0], [82.8, 7272.0], [82.9, 7272.0], [83.0, 7304.0], [83.1, 7304.0], [83.2, 7304.0], [83.3, 7304.0], [83.4, 7304.0], [83.5, 7304.0], [83.6, 7304.0], [83.7, 7304.0], [83.8, 7304.0], [83.9, 7304.0], [84.0, 7354.0], [84.1, 7354.0], [84.2, 7354.0], [84.3, 7354.0], [84.4, 7354.0], [84.5, 7354.0], [84.6, 7354.0], [84.7, 7354.0], [84.8, 7354.0], [84.9, 7354.0], [85.0, 7382.0], [85.1, 7382.0], [85.2, 7382.0], [85.3, 7382.0], [85.4, 7382.0], [85.5, 7382.0], [85.6, 7382.0], [85.7, 7382.0], [85.8, 7382.0], [85.9, 7382.0], [86.0, 7441.0], [86.1, 7441.0], [86.2, 7441.0], [86.3, 7441.0], [86.4, 7441.0], [86.5, 7441.0], [86.6, 7441.0], [86.7, 7441.0], [86.8, 7441.0], [86.9, 7441.0], [87.0, 7471.0], [87.1, 7471.0], [87.2, 7471.0], [87.3, 7471.0], [87.4, 7471.0], [87.5, 7471.0], [87.6, 7471.0], [87.7, 7471.0], [87.8, 7471.0], [87.9, 7471.0], [88.0, 7481.0], [88.1, 7481.0], [88.2, 7481.0], [88.3, 7481.0], [88.4, 7481.0], [88.5, 7481.0], [88.6, 7481.0], [88.7, 7481.0], [88.8, 7481.0], [88.9, 7481.0], [89.0, 7487.0], [89.1, 7487.0], [89.2, 7487.0], [89.3, 7487.0], [89.4, 7487.0], [89.5, 7487.0], [89.6, 7487.0], [89.7, 7487.0], [89.8, 7487.0], [89.9, 7487.0], [90.0, 7488.0], [90.1, 7488.0], [90.2, 7488.0], [90.3, 7488.0], [90.4, 7488.0], [90.5, 7488.0], [90.6, 7488.0], [90.7, 7488.0], [90.8, 7488.0], [90.9, 7488.0], [91.0, 7488.0], [91.1, 7488.0], [91.2, 7488.0], [91.3, 7488.0], [91.4, 7488.0], [91.5, 7488.0], [91.6, 7488.0], [91.7, 7488.0], [91.8, 7488.0], [91.9, 7488.0], [92.0, 7495.0], [92.1, 7495.0], [92.2, 7495.0], [92.3, 7495.0], [92.4, 7495.0], [92.5, 7495.0], [92.6, 7495.0], [92.7, 7495.0], [92.8, 7495.0], [92.9, 7495.0], [93.0, 7714.0], [93.1, 7714.0], [93.2, 7714.0], [93.3, 7714.0], [93.4, 7714.0], [93.5, 7714.0], [93.6, 7714.0], [93.7, 7714.0], [93.8, 7714.0], [93.9, 7714.0], [94.0, 7730.0], [94.1, 7730.0], [94.2, 7730.0], [94.3, 7730.0], [94.4, 7730.0], [94.5, 7730.0], [94.6, 7730.0], [94.7, 7730.0], [94.8, 7730.0], [94.9, 7730.0], [95.0, 7792.0], [95.1, 7792.0], [95.2, 7792.0], [95.3, 7792.0], [95.4, 7792.0], [95.5, 7792.0], [95.6, 7792.0], [95.7, 7792.0], [95.8, 7792.0], [95.9, 7792.0], [96.0, 7831.0], [96.1, 7831.0], [96.2, 7831.0], [96.3, 7831.0], [96.4, 7831.0], [96.5, 7831.0], [96.6, 7831.0], [96.7, 7831.0], [96.8, 7831.0], [96.9, 7831.0], [97.0, 7853.0], [97.1, 7853.0], [97.2, 7853.0], [97.3, 7853.0], [97.4, 7853.0], [97.5, 7853.0], [97.6, 7853.0], [97.7, 7853.0], [97.8, 7853.0], [97.9, 7853.0], [98.0, 7869.0], [98.1, 7869.0], [98.2, 7869.0], [98.3, 7869.0], [98.4, 7869.0], [98.5, 7869.0], [98.6, 7869.0], [98.7, 7869.0], [98.8, 7869.0], [98.9, 7869.0], [99.0, 7962.0], [99.1, 7962.0], [99.2, 7962.0], [99.3, 7962.0], [99.4, 7962.0], [99.5, 7962.0], [99.6, 7962.0], [99.7, 7962.0], [99.8, 7962.0], [99.9, 7962.0]], "isOverall": false, "label": "VerifyRoutingNumber - Not Found", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2900.0, "maxY": 7.0, "series": [{"data": [[2900.0, 2.0], [3000.0, 1.0], [3300.0, 2.0], [3400.0, 2.0], [3500.0, 1.0], [3700.0, 3.0], [3600.0, 2.0], [3800.0, 6.0], [3900.0, 1.0], [4200.0, 4.0], [4300.0, 5.0], [4100.0, 1.0], [4500.0, 4.0], [4400.0, 1.0], [4600.0, 1.0], [4700.0, 3.0], [4800.0, 2.0], [4900.0, 5.0], [5100.0, 2.0], [5000.0, 3.0], [5200.0, 2.0], [5300.0, 2.0], [5600.0, 2.0], [5500.0, 1.0], [5800.0, 1.0], [5700.0, 1.0], [6100.0, 1.0], [6200.0, 3.0], [6300.0, 1.0], [6500.0, 3.0], [6600.0, 1.0], [6700.0, 2.0], [6800.0, 3.0], [6900.0, 2.0], [7100.0, 3.0], [7000.0, 2.0], [7400.0, 7.0], [7200.0, 2.0], [7300.0, 3.0], [7700.0, 3.0], [7800.0, 3.0], [7900.0, 1.0]], "isOverall": false, "label": "VerifyRoutingNumber - Not Found", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 46.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 54.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 54.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 46.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 50.98999999999998, "minX": 1.68973518E12, "maxY": 50.98999999999998, "series": [{"data": [[1.68973518E12, 50.98999999999998]], "isOverall": false, "label": "ROUTING_NUMBER", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68973518E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2962.0, "minX": 2.0, "maxY": 7853.0, "series": [{"data": [[2.0, 7576.0], [3.0, 7853.0], [5.0, 7604.5], [6.0, 7382.0], [7.0, 7304.0], [9.0, 7458.5], [12.0, 7784.333333333333], [14.0, 7025.5], [15.0, 7471.0], [16.0, 7060.0], [17.0, 7354.0], [19.0, 7488.0], [20.0, 7488.0], [22.0, 7119.5], [23.0, 7245.0], [24.0, 7162.0], [25.0, 6831.0], [26.0, 7272.0], [27.0, 7441.0], [30.0, 7046.5], [31.0, 6552.0], [33.0, 6373.0], [32.0, 6672.0], [35.0, 6591.0], [34.0, 6740.0], [37.0, 6529.0], [36.0, 5771.0], [39.0, 6194.0], [40.0, 6259.0], [43.0, 5619.0], [42.0, 5871.5], [45.0, 5348.5], [47.0, 5804.0], [46.0, 5635.0], [50.0, 5023.0], [53.0, 5208.0], [52.0, 5006.5], [54.0, 4994.0], [56.0, 5092.5], [59.0, 5227.0], [58.0, 4688.5], [61.0, 4503.0], [60.0, 4893.0], [67.0, 4279.0], [66.0, 4751.0], [64.0, 4688.0], [71.0, 4605.666666666667], [68.0, 4964.0], [75.0, 4314.0], [74.0, 3898.0], [73.0, 4187.0], [72.0, 4374.0], [78.0, 3624.0], [77.0, 4145.5], [83.0, 3825.5], [81.0, 4265.0], [80.0, 3963.5], [87.0, 3905.0], [84.0, 4370.0], [90.0, 4211.0], [89.0, 3732.0], [88.0, 3964.0], [95.0, 3450.0], [94.0, 3855.0], [93.0, 3855.0], [92.0, 3652.5], [97.0, 3093.0], [96.0, 2962.0], [100.0, 3203.6666666666665]], "isOverall": false, "label": "VerifyRoutingNumber - Not Found", "isController": false}, {"data": [[50.98999999999998, 5505.799999999998]], "isOverall": false, "label": "VerifyRoutingNumber - Not Found-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1358.2666666666667, "minX": 1.68973518E12, "maxY": 1361.6666666666667, "series": [{"data": [[1.68973518E12, 1358.2666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68973518E12, 1361.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68973518E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 5505.799999999998, "minX": 1.68973518E12, "maxY": 5505.799999999998, "series": [{"data": [[1.68973518E12, 5505.799999999998]], "isOverall": false, "label": "VerifyRoutingNumber - Not Found", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68973518E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 5505.64, "minX": 1.68973518E12, "maxY": 5505.64, "series": [{"data": [[1.68973518E12, 5505.64]], "isOverall": false, "label": "VerifyRoutingNumber - Not Found", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68973518E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 125.27000000000001, "minX": 1.68973518E12, "maxY": 125.27000000000001, "series": [{"data": [[1.68973518E12, 125.27000000000001]], "isOverall": false, "label": "VerifyRoutingNumber - Not Found", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68973518E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 4374.0, "minX": 1.68973518E12, "maxY": 7962.0, "series": [{"data": [[1.68973518E12, 7962.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68973518E12, 7761.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68973518E12, 7962.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68973518E12, 7857.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68973518E12, 4374.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68973518E12, 6864.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68973518E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3198.5, "minX": 6.0, "maxY": 7354.0, "series": [{"data": [[19.0, 5043.0], [30.0, 7354.0], [15.0, 6316.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[19.0, 4752.0], [6.0, 3198.5], [30.0, 4187.0], [15.0, 6201.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3196.0, "minX": 6.0, "maxY": 7354.0, "series": [{"data": [[19.0, 5043.0], [30.0, 7354.0], [15.0, 6316.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[19.0, 4752.0], [6.0, 3196.0], [30.0, 4187.0], [15.0, 6201.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.68973518E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.68973518E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68973518E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.68973518E12, "maxY": 0.9, "series": [{"data": [[1.68973518E12, 0.9]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68973518E12, 0.7666666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68973518E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.68973518E12, "maxY": 0.9, "series": [{"data": [[1.68973518E12, 0.7666666666666667]], "isOverall": false, "label": "VerifyRoutingNumber - Not Found-failure", "isController": false}, {"data": [[1.68973518E12, 0.9]], "isOverall": false, "label": "VerifyRoutingNumber - Not Found-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68973518E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.68973518E12, "maxY": 0.9, "series": [{"data": [[1.68973518E12, 0.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68973518E12, 0.7666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68973518E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

