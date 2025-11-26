<template>
  <div class="game-view bg-color-primary">
    <FTitle class="title">Ecobots</FTitle>

    <div class="game-map bg-color-blue rounded">
      <FAppBar>
        <template #navigation>
          <FButtonIcon name="chevron-left" small label="Back" onDark @click="backToHome" />
        </template>

        <div class="instruction-text">
          <p class="font-size-body">Put pins from <span style="font-weight:900; color: #0bdc51;">start <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACc1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wOS0yNlQxNjo1OTo0MCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMjZUMTc6MjE6MjIrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMjZUMTc6MjE6MjIrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc1NzA5MUYzOUFFQzExRjA5NzE4RERCOEI3OTdGRkNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc1NzA5MUY0OUFFQzExRjA5NzE4RERCOEI3OTdGRkNBIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGNjYjFkMGMtM2M4Ni01MjQ3LThiNjItNmNhOTZjZTc1YjhmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowY2NiMWQwYy0zYzg2LTUyNDctOGI2Mi02Y2E5NmNlNzViOGYiIHN0RXZ0OndoZW49IjIwMjUtMDktMjZUMTY6NTk6NDArMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzUwY2VmMWUtMjU4Zi03ODQxLWExNDgtNzYxMWFkNDY5NzY3IiBzdEV2dDp3aGVuPSIyMDI1LTA5LTI2VDE3OjAzOjA5KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU1NDFiNjcyLWMyODAtMzU0Mi05Y2RjLWI3ZDk2NTYwY2MxNiIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0yNlQxNzowNTowMyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvcG5nIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkY2M5NDliNS1kZjQzLWI0NDMtODNkOS03ZTkyNDY4ZTlhNjEiIHN0RXZ0OndoZW49IjIwMjUtMDktMjZUMTc6MDU6MDMrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjQ2OWVkMjktNjAwZC1iNzQwLTliMjYtZTE3MjA5NmUwZmYxIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTI2VDE3OjEwOjU4KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0NjllZDI5LTYwMGQtYjc0MC05YjI2LWUxNzIwOTZlMGZmMSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVlZjBjOTM3LThhY2QtNzM0OS1iYjNkLTA1MzNlZTZjNThkZSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjBjY2IxZDBjLTNjODYtNTI0Ny04YjYyLTZjYTk2Y2U3NWI4ZiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkWEVAoAAAO4SURBVHjajJZNaF1FFMfPmXvJi5vY0JoWitZFqIUYRRSFB60utIUIunBXkGCtYikikoULQVeKiwoiLizSiC2u3NhUaQptpR80RY2EkFraVeOiESqCbT6ajzvH38zte725efe19zJv7syc//k+Z55uvvS2LHbMitNE4mMmln+Jmj6o5gbYGGDxhIl/iG2v4v5mnoDuJ/ZPmNqClJ4lW5bnatskndN5WdQ5Ud6caxDiOmG+H/A75qxXmiKbz2bG02L6Jrgp5q9M/SHoV5oCZFkWdAHFpfg6cT7td+bOibMDAHo1yqx446E9Du3XzpJTztKta/gV1VLvtgP4xVz2TAutOUr+wmU31hxAC2YH8xloni2euOgTjeA+fo5i6npp+aCRuc9R4og03FkWo34T0wi8ehvqEVuH5lpDiSMQdItUsvecj/AxUiUgF5JthNd3KJMGF7qQNSz2mvNPSbvHdJJsucb4jQSYaUvqfB2a16MFmPAAoHdb+bwE+zn6Wv084NF70Iaf95HU4dB+B6DHyg4pDmjC5o85MIJ/yPe0NIoGWz+ur6eW+Z2SNrLE3dTMfYTAf1l2FgTetMSPN1be+dOa6SAsawWeCwT3YZ/4jwlXDQFhb2eK0U/mxRWldkliL8PwLYRMV7vNL1oih+8WZrSyD177+KgV3NSPnb5nVT5r9hLzpPpkb7tsKfiC4kyG+BgHW28oFcrMa7bBmXltkc9dFM43aDUM6cY2dfEodXHUu+wAmFqp9GJqk0XpP1WZAOgNSIaqLOHsExR5pcqVoeqxQCbukaHn2qTw2Wo3xsyaIgZ2XKs0NDcTelNB40fY62kG0ckx1vOtsTH6J50kepZoXG6pgelxMms2bxTpbuY/GL+SALvCHi68joAzFQKm6LIXQn++DfzLtabGDjgMYReaH8LX3zPWkylbYDyKkM+wgQqyb1tiRb9AuSViEIM5TKqNlzSYRrt1fI7BeM+qOGhszx9Ac4rVLPN/peBfhOfhgEmjAGdLltkgDM/TqNblRec3MY7FRK/Msow2o/Vy5mDAINfrssQrx5od8BKI15B+R5tQkXY/lZbm4w5z0VcRfDW/3i1cOFa4lfxpeL6Ifyfvq4pX3RbJRbAvwHysdKM1+kaoPU8jW/kd19Sx5EM0mm5UZfyvofmwu101xOoKXfM9MM+D/TOexgQMle4lTbIOSVc687xV1xA2x+JTOutBKAdCVwx/W7ytdEdHaHoD+7FSQhqPko63IizcYF4kub1Ez3TSWVP5X4ABANiw0FGVT/VcAAAAAElFTkSuQmCC" alt="Embedded Logo"></span> to <span style="font-weight:900; color: #ff2a1f;">finish <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACc1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wOS0yNlQxNjo1OTo0MCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMjZUMTc6MTk6MzIrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMjZUMTc6MTk6MzIrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM0MDhENkIzOUFFQzExRjBBNkRFQUY0QjNCM0Q2OTk4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM0MDhENkI0OUFFQzExRjBBNkRFQUY0QjNCM0Q2OTk4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGNjYjFkMGMtM2M4Ni01MjQ3LThiNjItNmNhOTZjZTc1YjhmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowY2NiMWQwYy0zYzg2LTUyNDctOGI2Mi02Y2E5NmNlNzViOGYiIHN0RXZ0OndoZW49IjIwMjUtMDktMjZUMTY6NTk6NDArMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzUwY2VmMWUtMjU4Zi03ODQxLWExNDgtNzYxMWFkNDY5NzY3IiBzdEV2dDp3aGVuPSIyMDI1LTA5LTI2VDE3OjAzOjA5KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU1NDFiNjcyLWMyODAtMzU0Mi05Y2RjLWI3ZDk2NTYwY2MxNiIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0yNlQxNzowNTowMyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjQgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvcG5nIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkY2M5NDliNS1kZjQzLWI0NDMtODNkOS03ZTkyNDY4ZTlhNjEiIHN0RXZ0OndoZW49IjIwMjUtMDktMjZUMTc6MDU6MDMrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjQ2OWVkMjktNjAwZC1iNzQwLTliMjYtZTE3MjA5NmUwZmYxIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTI2VDE3OjEwOjU4KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmY0NjllZDI5LTYwMGQtYjc0MC05YjI2LWUxNzIwOTZlMGZmMSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVlZjBjOTM3LThhY2QtNzM0OS1iYjNkLTA1MzNlZTZjNThkZSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjBjY2IxZDBjLTNjODYtNTI0Ny04YjYyLTZjYTk2Y2U3NWI4ZiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk+1MoUAAARlSURBVHjahFZLaFxVGP7P895JNGmotgXxsQi4qKlIq4uAUUEjRNCF4KIgQW1BkSLShQtBV4oLBREXijRiiys3NlVSQVtaxRZtREJV7Moo2MKUljTNzNzz9Dt3ZjIzcSa9cObOnPOf73z/4/vPsHPPPELj/1SJKUlEjGII+CSKGA0lRo0UM/g+I0PYpZy/FdPBSnEpMvYrjL7S3n+jXaiXe9ob08sacrvvJ3nz1RUavXyFSIj1Ra9EbgV/eSjEFwE6TqG10HluA4vdxNgLOOx84OxD7fwh5rzDXNPCGCpWVklGzonaI7HO1ASYzFUKt6cEThsEo0GPcuEe4uyjulZ7uZL7M+MulAvAg5fEu40B/qAI4WSlbvdQTOC9YFj/2yhZ7ZkswxKpUtgpHukUbB7oXuYlQ2AVmdoJ8KPK+q00gDDy8V5DyyMDvTFuB49x3mg53iQIDziDE1JkgdERgI8N2hwkD7l180j2fBS8vxGIaeO2e84+C1JIhkNwYCSjxD7E/D7a5DFCLCHefykffoYnFykOtgXWJGyeTcHhVquK9OFA6dImD2y+ZihhVFXNCH6c2CbGTeavFlJobiWf4i7c3ZO0dPT6QNlKnl5fNmu4JPJFmuu16z0Rnk7ggElpKU5DXZgS5KS4tpqpN1DTV1Cq+XoYOLs2XNjFNgF8P1FXYjYKyjqwsW6lvH2kYd7kPmTMhyS8aSl8vLcNJL0fGbbsCfzer61bLuf7hAIAxbAPh5u4TRuU505p3UsJvB0mFmmCK+e2dUiUVfAYsr9Uq+h9UbBN85LsU6jWKvogcrSYIbmdUCMEhb0FckOBboyf8yOVhv2kUHIucrZ9YGVpeRdsjg417LvS+Wyjt1By4Ebry/0qKNUwGDwHgIN9K4YzKpR4a6hhnmT9KhBzEGWVO46uOCgSvFz4fj3Z3TjoU2B4eqP33SHCOM+RlIV2o+vTGi5CuSc7vUjeAVFuazNEKR6zStT6pgfk4Nm3PA/xtJfij37KdJwvSOuvJ2Mkci+mfgGrn+qZejx5h9bxb0PJU/32pjaeO/8jx0cDveODVji6wsOTGuegjZFapg5B/p/nhduqC3cndHK8lul3gCth8+n/2jnCA8z30VoML0vT+rm1XC12MzGSLyNEW2B4ZrhunudoE02VQ5IQ0VBhXvOcf4fZ6/B0paeta3k2s/4w7keSIanYeSNCnLVa/oCWuyWBoFR3SBeOIUesbxGAjLJuCuKcXK8ivIBRxe9Z7ryF1Ig3lViK4jcn2NNWi5U0x0LMwJrRDbQGO5mItnRRxY6nyluNJf6x90aDuE54xh5t5GqpfVPd8GkRRKs4Gzg9DPAzPakU6d5N8W2NvG7OoQ9N4o593Sq5XB6CmJcjhM73NLDmJP8TgnslN+6hvGZ+L23SHgyEmOSlsZtoeG0UmUu3J2sSinEtMPZ2XcuP4dEM/jVMo9fsUsaOYT46rapwfwmWCxkqClW12vzbgpgDQDQMRS0o5pr+E2AA5ZVDWC4KDM8AAAAASUVORK5CYII=" alt="Embedded Logo"></span> with limited battery.</p>
          <p class="font-size-body">The robot follows your plan, then we compare it with AI path finder.</p>
        </div>

        <template #actions>
          <div class="actions">
            <FButtonIcon name="undo" small label="Reset Map" onDark @click="resetMap" />
            <BatteryIndicator size="medium" :charge="stats?.charge ?? 0" />
          </div>
        </template>
      </FAppBar>

      <FDivider class="bg-color-blue-light my-sm" />

      <div class="map-container" ref="mapContainer" @click="handleClick">
        <img v-if="map" :src="map?.mapImage" ref="mapImage" />
        <div
          v-for="(p, i) in points"
          :key="i"
          class="point"
          :style="{ left: p.pixelX + 'px', top: p.pixelY + 'px' }"
        ></div>
      </div>
      <PlayerForm @start="sendPoints"/>
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGameMap } from '../composables/useGameMap'
import { useGameStats } from '../composables/useGameStats'
import { FTitle, FButtonIcon, FDivider, FAppBar } from 'fari-component-library'
import PlayerForm from '../components/PlayerForm.vue'
import BatteryIndicator from '../components/BatteryIndicator.vue'
import { useGameStore } from '@/stores/game'
const gameStore = useGameStore()
const errorMessage = ref('')
const { data: map, refetch: refetchMap } = useGameMap()
const { data: stats, refetch: refetchStats } = useGameStats()
const router = useRouter()

const realWidth = 1.8
const realHeight = 0.6
const points = ref<any[]>([])
const mapContainer = ref<HTMLElement | null>(null)
const mapImage = ref<HTMLImageElement | null>(null)

const handleClick = (e: MouseEvent) => {
  if (!mapImage.value) return
  const rect = mapImage.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const realX = (x / rect.width) * realWidth
  const realY = (y / rect.height) * realHeight
  points.value.push({ pixelX: x, pixelY: y, x_m: +realX.toFixed(3), y_m: +realY.toFixed(3) })
}

const resetMap = async () => {
  points.value = []
  errorMessage.value = ''
  try {
    await Promise.all([refetchMap(), refetchStats()])
  } catch {
    errorMessage.value = 'Failed to refresh game data.'
  }
}

const backToHome = () => router.push('/')

const sendPoints = async () => {
  const payload = points.value.map(p => ({
    x: p.x_m,
    y: p.y_m
  }))

  gameStore.setGameUserRoute(payload);
  console.log(payload)
  router.push('/result')

}
</script>

<style scoped lang="scss">
.game-view {
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .error {
    color: red;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
}

.game-map {
  margin-top: 1rem;
  padding: 2rem 3rem 3rem 2rem;
  width: fit-content;
  position: relative;
  .map-container {
    position: relative;
    display: inline-block;
    img {
      max-width: 100%;
      height: auto;
      border: 0.125rem solid #1254e3;
      border-radius: 1rem;
      display: block;
    }
    .point {
      position: absolute;
      width: 12px;
      height: 12px;
      background: red;
      border: 2px solid white;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  }
}

.title {
  margin: 1rem auto;
}

.playerform {
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: 16rem;
}

:deep(.app-bar) {
  width: 100% !important;
  .app-bar__content {
    flex: unset !important;
    padding: 0 2rem;
    width: 100%;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.instruction-text {
  width: 100%;
  margin: 0 auto;
  color: white;
  text-align: center;
}

:deep(.title) {
  margin: 0.5rem auto;
}
</style>
