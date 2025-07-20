import { useState } from "react";
import { StatusCard } from "@/components/StatusCard";
import { ThreatAlert } from "@/components/ThreatAlert";
import { DeviceCard } from "@/components/DeviceCard";
import { ActivityLog } from "@/components/ActivityLog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Activity,
  Users,
  AlertTriangle,
  Eye,
  Laptop,
  Database,
  Network,
  Target,
  TrendingUp,
  Clock,
  Globe,
  Zap,
} from "lucide-react";

const Dashboard = () => {
  const [alerts, setAlerts] = useState([
    {
      id: "1",
      title: "Unauthorized Access Detected",
      description: "Multiple failed login attempts from suspicious IP address 192.168.1.254",
      severity: "critical" as const,
      timestamp: "2 minutes ago",
      source: "Authentication System",
      location: "Moscow, RU"
    },
    {
      id: "2", 
      title: "Data Exfiltration Alert",
      description: "Large file transfer detected from target device TD-001",
      severity: "high" as const,
      timestamp: "15 minutes ago",
      source: "Network Monitor",
      location: "Berlin, DE"
    },
    {
      id: "3",
      title: "Surveillance Module Active",
      description: "Camera and microphone access enabled on target device",
      severity: "medium" as const,
      timestamp: "1 hour ago",
      source: "Device Controller",
      location: "London, UK"
    }
  ]);

  const devices = [
    {
      id: "1",
      name: "Target Alpha",
      type: "mobile" as const,
      status: "online" as const,
      lastSeen: "2 minutes ago",
      location: "New York, US",
      batteryLevel: 78,
      ipAddress: "192.168.1.105",
      osInfo: "Android 14"
    },
    {
      id: "2",
      name: "Workstation Beta",
      type: "laptop" as const,
      status: "online" as const,
      lastSeen: "5 minutes ago", 
      location: "London, UK",
      ipAddress: "10.0.0.45",
      osInfo: "Windows 11"
    },
    {
      id: "3",
      name: "Tablet Gamma",
      type: "tablet" as const,
      status: "offline" as const,
      lastSeen: "2 hours ago",
      location: "Tokyo, JP",
      batteryLevel: 23,
      ipAddress: "172.16.0.12",
      osInfo: "iOS 17"
    }
  ];

  const handleDismissAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="min-h-screen matrix-grid">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Surveillance Control Center</h1>
            <p className="text-muted-foreground">Real-time monitoring and intelligence dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-green-400">System Online</span>
            </div>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatusCard
            title="Active Targets"
            value="47"
            description="Devices under surveillance"
            icon={<Target className="w-4 h-4" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatusCard
            title="Data Collected"
            value="2.4 TB"
            description="Total intelligence gathered"
            icon={<Database className="w-4 h-4" />}
            trend={{ value: 8, isPositive: true }}
          />
          <StatusCard
            title="Active Alerts"
            value={alerts.length}
            description="Requiring immediate attention"
            icon={<AlertTriangle className="w-4 h-4" />}
            variant="critical"
          />
          <StatusCard
            title="Network Coverage"
            value="94%"
            description="Global surveillance reach"
            icon={<Globe className="w-4 h-4" />}
            trend={{ value: 3, isPositive: true }}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alerts Panel */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Critical Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert) => (
                  <ThreatAlert
                    key={alert.id}
                    {...alert}
                    onDismiss={handleDismissAlert}
                  />
                ))}
              </CardContent>
            </Card>

            {/* Device Grid */}
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-primary" />
                  Monitored Devices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {devices.map((device) => (
                    <DeviceCard key={device.id} {...device} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Sidebar */}
          <div className="space-y-4">
            <ActivityLog entries={[]} />
            
            {/* Quick Actions */}
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Start Live Monitor
                </Button>
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <Database className="w-4 h-4 mr-2" />
                  Extract Data
                </Button>
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <Network className="w-4 h-4 mr-2" />
                  Scan Network
                </Button>
                <Button variant="secondary" className="w-full justify-start" size="sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Deploy Agent
                </Button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">CPU Usage</span>
                  <span className="text-sm text-foreground">67%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "67%" }} />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Memory</span>
                  <span className="text-sm text-foreground">4.2/8 GB</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "52%" }} />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Network</span>
                  <span className="text-sm text-green-400">Optimal</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;