/**
 * The DeviceGraph is a set of utility functions for manipulating a set of devices
 * and links between them.
 */

class DeviceGraph {
  /**
   * Generate a new graph, containing the given devices.
   * @param {array} devices Optional : A list of devices to add to the graph.
   */
  constructor (devices = []) {
    this._devices = devices
  }

  /**
   * Add a device to the graph.
   * @param {Device} device
   */
  addDevice (device) {
    this._devices.push(device)
  }

  /**
   * Remove a device from the graph.
   * @param {Device} device
   */
  removeDevice (device) {
    this._devices.splice(this._devices.indexOf(device))
  }

  /**
   *
   */
  get devices () {
    return this._devices
  }
}

export default DeviceGraph