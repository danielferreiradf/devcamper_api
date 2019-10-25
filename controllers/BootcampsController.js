module.exports = {
  // @desc Get all bootcamps
  // @route GET /api/v1/bootcamps
  // @access Public
  async getBootcamps(req, res) {
    res.send("Hello");
  },

  // @desc Get single bootcamp
  // @route GET /api/v1/bootcamps/:id
  // @access Public
  async getBootcamp(req, res) {
    res.send("Hello");
  },

  // @desc Create new bootcamp
  // @route POST /api/v1/bootcamps
  // @access Private
  async createBootcamp(req, res) {
    res.send("Hello");
  },

  // @desc Update bootcamp
  // @route PUT /api/v1/bootcamps/:id
  // @access Private
  async updateBootcamp(req, res) {
    res.send("Hello");
  },

  // @desc Delete bootcamp
  // @route DELETE /api/v1/bootcamps
  // @access Private
  async deleteBootcamp(req, res) {
    res.send("Hello");
  }
};
