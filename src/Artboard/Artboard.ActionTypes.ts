const ActionTypes = {
  // General
  ON_READY: 'ON_READY',
  LOAD_LOCAL_STATE: 'LOAD_LOCAL_STATE',
  SAVE_LOCAL_STATE: 'SAVE_LOCAL_STATE',
  PERFORM_ACTION_START: 'PERFORM_ACTION_START',
  PERFORM_ACTION_END: 'PERFORM_ACTION_END',
  RESET: 'RESET',
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
  TOGGLE_INTERFACE: 'TOGGLE_INTERFACE',
  NULL: 'NULL',

  // Zoom
  ZOOM: 'ZOOM',
  ZOOM_IN_START: 'ZOOM_IN_START',
  ZOOM_IN: 'ZOOM_IN',
  ZOOM_OUT_START: 'ZOOM_OUT_START',
  ZOOM_OUT: 'ZOOM_OUT',
  ZOOM_RESET: 'ZOOM_RESET',

  // Moving
  MOVE_START: 'MOVE_START',
  MOVE_END: 'MOVE_END',
  MOVE_DRAG_START: 'MOVE_DRAG_START',
  MOVE_DRAG: 'MOVE_DRAG',
  MOVE_DRAG_END: 'MOVE_DRAG_END',

  // Resizing
  RESIZE_ARTBOARD: 'RESIZE_ARTBOARD',

  // Toolbar
  TOGGLE_GUIDES: 'TOGGLE_GUIDES',
  TOGGLE_BOX_INSPECTOR: 'TOGGLE_BOX_INSPECTOR',
  TOGGLE_SIZE_INSPECTOR: 'TOGGLE_SIZE_INSPECTOR',

  EYEDROPPER_START: 'EYEDROPPER_START',
  EYEDROPPER_READY: 'EYEDROPPER_READY',
  EYEDROPPER_STOP: 'EYEDROPPER_STOP',

  CROSSHAIR_START: 'CROSSHAIR_START',
  CROSSHAIR_END: 'CROSSHAIR_END',
  CROSSHAIR_ADD_SNAPSHOT: 'CROSSHAIR_ADD_SNAPSHOT',
  CROSSHAIR_SHOW_SNAPSHOTS: 'CROSSHAIR_SHOW_SNAPSHOTS',
  CROSSHAIR_HIDE_SNAPSHOTS: 'CROSSHAIR_HIDE_SNAPSHOTS',
  CROSSHAIR_CLEAR: 'CROSSHAIR_CLEAR',
}

export default ActionTypes
