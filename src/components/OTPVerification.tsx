import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { ArrowLeft } from 'lucide-react';

interface OTPVerificationProps {
  mobile: string;
  onVerified: () => void;
  onBack: () => void;
}

const OTPVerification = ({ mobile, onVerified, onBack }: OTPVerificationProps) => {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // Mock OTP verification - accepts any 6-digit code
    if (otp.length === 6) {
      onVerified();
    }
  };

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>

      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">Enter OTP</h3>
        <p className="text-sm text-muted-foreground">
          We've sent a 6-digit code to {mobile}
        </p>
      </div>

      <div className="flex justify-center">
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={(value) => setOtp(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button
        onClick={handleVerify}
        disabled={otp.length !== 6}
        className="w-full"
      >
        Verify OTP
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Didn't receive code?{' '}
        <button className="text-primary hover:underline">Resend OTP</button>
      </p>
    </div>
  );
};

export default OTPVerification;
