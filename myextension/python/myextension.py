# myextension.py
class WeatherConnector:
    def __init__(self, ipython):
        """ Constructor """
        self.ipython = ipython
    
    def register_comm(self):
        """ Register a comm_target which will be used by frontend to start communication """
        self.ipython.kernel.comm_manager.register_target("WeatherConnector", self.target_func)
    
    def target_func(self, comm, msg):
        @comm.on_msg
        def _recv(msg):
            print("here")
            self.ipython.push({"weather": str(msg)})     
    
def load_ipython_extension(ipython):
    connector = WeatherConnector(ipython)
    connector.register_comm()

def unload_ipython_extension(ipython):
    # If you want your extension to be unloadable, put that logic here.
    return