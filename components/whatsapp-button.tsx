import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WhatsAppButtonProps {
  phoneNumber: string
  children: React.ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export function WhatsAppButton({ 
  phoneNumber, 
  children, 
  className = '',
  size = 'default',
  variant = 'default'
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button 
        size={size} 
        variant={variant}
        className={`inline-flex items-center gap-2 ${className}`}
      >
        <MessageCircle className="h-4 w-4" />
        {children}
      </Button>
    </a>
  )
}